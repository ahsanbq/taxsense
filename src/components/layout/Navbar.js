import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/taxsense_ltd1.png"
                alt="Taxsense Ltd"
                className="h-10 w-auto scale-125"
              />
            </Link>
          </div>
          {/* //desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="navbar-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-bold transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="navbar-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-bold transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/services"
              className="navbar-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-bold transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/contact"
              className="navbar-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-bold transition-colors"
            >
              {t.nav.contact}
            </Link>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center cursor-pointer space-x-2 bg-primary text-red-600 px-3 py-2 rounded-md text-md font-bold hover:bg-primary-600 transition-colors"
              title={
                language === "en" ? "Switch to Bengali" : "Switch to English"
              }
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{language === "en" ? "বাং" : "EN"}</span>
            </button>
          </div>

          {/* Mobile menu button & Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-primary text-white px-2 py-1 rounded text-xs font-medium hover:bg-primary-600 transition-colors"
              title={
                language === "en" ? "Switch to Bengali" : "Switch to English"
              }
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{language === "en" ? "বাং" : "EN"}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
            className="navbar-link text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/about"
            className="navbar-link text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/services"
            className="navbar-link text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            {t.nav.services}
          </Link>
          <Link
            href="/contact"
            className="navbar-link text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
