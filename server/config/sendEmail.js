import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Validate environment variables
if (!process.env.RESEND_API) {
  throw new Error('Missing RESEND_API in .env file');
}

const resend = new Resend(process.env.RESEND_API);

/**
 * Send email using Resend (test mode)
 * @param {Object} params - Email parameters
 * @param {string|string[]} params.sendTo - Recipient email(s)
 * @param {string} params.subject - Email subject
 * @param {string} params.html - HTML content
 * @param {string} [params.text] - Plain text content (optional)
 * @returns {Promise<Object>} - Response from Resend API
 */
const sendTestEmail = async ({ sendTo, subject, html, text }) => {
  try {
    // Validate input parameters
    if (!sendTo || !subject || !html) {
      throw new Error('Missing required email parameters: sendTo, subject, or html');
    }

    // Send email using Resend's test domain
    const { data, error } = await resend.emails.send({
      from: 'Binkeyit <onboarding@resend.dev>', // Using Resend's test domain
      to: Array.isArray(sendTo) ? sendTo : [sendTo], // Ensure it's an array
      subject: subject,
      html: html,
      text: text || '', // Include plain text version if provided
    });

    if (error) {
      console.error('Resend API error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return {
      success: true,
      data: data,
      message: 'Email sent successfully in test mode'
    };

  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      error: error.message || 'Failed to send email',
      details: error
    };
  }
};

export default sendTestEmail;