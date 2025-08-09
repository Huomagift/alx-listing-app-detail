import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            alx<span className="text-blue-500">Stay</span>
          </h2>
          <p className="text-sm">
            Your trusted partner to discover and book the best places around the world. 
            Luxury, comfort, and unforgettable experiences await you.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Top Trips</a></li>
            <li><a href="#" className="hover:underline">Nearest Beaches</a></li>
            <li><a href="#" className="hover:underline">Countryside</a></li>
            <li><a href="#" className="hover:underline">Luxury Villas</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-2">Help</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        &copy; 2025 alxStay. All rights reserved. | Terms | Privacy
      </div>
    </footer>
  );
};

export default Footer;
