import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="text-xl font-bold mb-2">R&R Ornaments</h4>
          <p>Crafting memories with every ornament.</p>
        </div>
        <div>
          <p>Contact us: support@rrornaments.com</p>
          <p className="mt-1">© 2025 R&R Ornaments</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
