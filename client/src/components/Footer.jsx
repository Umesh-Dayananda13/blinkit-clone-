import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Branding Section - Left Side */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-green-500">blin</span>
              <span className="text-4xl font-bold text-yellow-400">kit</span>
            </div>
            <div className="mt-2 flex items-center text-gray-300">
              <span>Created with </span>
              <FaHeart className="mx-1 text-red-500" />
              <span>by </span>
              <span className="ml-1 font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Umesh
              </span>
            </div>
          </div>

          {/* Newsletter - Right Side */}
          <div className="w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full md:w-64 rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/groceries" className="text-gray-400 hover:text-white transition">Groceries</Link></li>
              <li><Link to="/snacks" className="text-gray-400 hover:text-white transition">Snacks</Link></li>
              <li><Link to="/beverages" className="text-gray-400 hover:text-white transition">Beverages</Link></li>
              <li><Link to="/household" className="text-gray-400 hover:text-white transition">Household</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className="mt-4 text-gray-400">
              <p>123 Main Street</p>
              <p>City, State 10001</p>
              <p>Email: contact@blinkit.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-green-400">blin</span>
            <span className="text-yellow-300">kit</span>. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-400">
              Crafted by <span className="font-medium text-purple-300">Umesh</span>
            </span>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-white text-sm transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
