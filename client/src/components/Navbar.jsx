import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboardCustomize,MdOutlineManageAccounts,MdOutlineClose } from "react-icons/md";
import { HiOutlineLogin,HiOutlineLogout,HiMenuAlt3} from "react-icons/hi";

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-white text-2xl font-bold tracking-tight flex items-center"
            >
              AuthApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-blue-100 font-medium py-2 px-3 rounded-lg bg-blue-500/20 backdrop-blur-sm">
                  Hello, {user.email}
                </span>
                <Link
                  to="/dashboard"
                  className="text-white hover:bg-blue-500/30 py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                >
                  <MdDashboardCustomize size={20}/>
                  Dashboard
                </Link>
                <button
                  onClick={onLogout}
                  className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-red-500/30"
                >
                  <HiOutlineLogout size={20}/>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:bg-blue-500/30 py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                >
                  <HiOutlineLogin size={20}/>
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 py-2 px-4 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-green-500/30"
                >
                  <MdOutlineManageAccounts size={20}/>
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-blue-500/30 p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <HiMenuAlt3 size={25}/>
              ) : (
                <MdOutlineClose size={25}/>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 bg-blue-700 shadow-inner">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-4">
              <div className="text-blue-100 font-medium py-2 px-3 rounded-lg bg-blue-500/20">
                Hello, {user.email}
              </div>
              <Link
                to="/dashboard"
                className="text-white hover:bg-blue-500/30 py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdDashboardCustomize size={20}/>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <HiOutlineLogout size={20}/>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <Link
                to="/login"
                className="text-white hover:bg-blue-500/30 py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiOutlineLogin size={20}/>
                Login
              </Link>
              <Link
                to="/register"
                className="text-white bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/30"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdOutlineManageAccounts size={20}/>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;