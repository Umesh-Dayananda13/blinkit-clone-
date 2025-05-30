import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Search from './Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import useMobile from '../hooks/useMobile';
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import UserMenu from './UserMenu';
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees';
import { useGlobalContext } from '../provider/GlobalProvider';
import DisplayCartItem from './DisplayCartItem';

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = location.pathname === '/search';

  const user = useSelector((state) => state?.user);
  const cartItem = useSelector((state) => state.cartItem.cart);

  const { totalPrice, totalQty } = useGlobalContext();

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openCartSection, setOpenCartSection] = useState(false);

  const redirectToLoginPage = () => {
    navigate('/login');
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  };

  const handleMobileUser = () => {
    if (!user._id) {
      navigate('/login');
      return;
    }
    navigate('/user');
  };

  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white">
      {/* Hide header on search page for mobile */}
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/* Logo with image left, text right */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center h-full group gap-2">
              <img
                src={logo}
                alt="BlinKit Logo"
                className="h-8 w-auto object-contain"
                draggable={false}
              />
              <span className="text-3xl font-extrabold whitespace-nowrap">
                <span className="text-green-500 group-hover:text-green-400 transition-colors">
                  blin
                </span>
                <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  kit
                </span>
              </span>
            </Link>
          </div>

          {/* Search input - visible only on large screens */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/* User and Cart Section */}
          <div>
            {/* Mobile: user icon button */}
            <button
              className="text-neutral-600 lg:hidden"
              onClick={handleMobileUser}
              aria-label="User Account"
            >
              <FaRegCircleUser size={26} />
            </button>

            {/* Desktop: user menu and cart */}
            <div className="hidden lg:flex items-center gap-10">
              {user?._id ? (
                <div className="relative">
                  {/* Account button toggles dropdown */}
                  <div
                    onClick={() => setOpenUserMenu((prev) => !prev)}
                    className="flex select-none items-center gap-1 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') setOpenUserMenu((prev) => !prev);
                    }}
                    aria-haspopup="true"
                    aria-expanded={openUserMenu}
                  >
                    <p>Account</p>
                    {openUserMenu ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                  </div>

                  {/* User menu dropdown */}
                  {openUserMenu && (
                    <div className="absolute right-0 top-12">
                      <div className="bg-white rounded p-4 min-w-52 lg:shadow-lg">
                        <UserMenu close={handleCloseUserMenu} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={redirectToLoginPage}
                  className="text-lg px-2"
                  aria-label="Login"
                >
                  Login
                </button>
              )}

              {/* Cart button */}
              <button
                onClick={() => setOpenCartSection(true)}
                className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white"
                aria-label="View Cart"
              >
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold text-sm">
                  {cartItem[0] ? (
                    <div>
                      <p>{totalQty} Items</p>
                      <p>{DisplayPriceInRupees(totalPrice)}</p>
                    </div>
                  ) : (
                    <p>My Cart</p>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search below header */}
      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>

      {/* Cart details dropdown */}
      {openCartSection && <DisplayCartItem close={() => setOpenCartSection(false)} />}
    </header>
  );
};

export default Header;
