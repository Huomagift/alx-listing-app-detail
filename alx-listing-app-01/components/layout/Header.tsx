import React from "react";

const Header = () => {
  const navLinks = [
    "Top Trip",
    "Free Reservation",
    "Book Now Pay Later",
    "Self Checkin",
    "Nearest Beach",
  ];

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          alx<span className="text-gray-700">Stay</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* User Actions */}
        <div className="space-x-4">
          <button className="px-4 py-2 text-sm border rounded hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
