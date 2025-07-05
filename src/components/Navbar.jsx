import React, { useState } from 'react';
import logo from "../assets/R&ROrnaments.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 ">
      <div className="mx-auto px-6 py-2 flex items-center justify-between shadow-sm">
        <a href='/' className="text-2xl font-bold text-gray-800"><img className='hover:scale-110 duration-200 w-26 ' src={logo} alt="" /></a>

      
        <ul className="max-md:hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
          <li><a href="#collections" className="hover:text-pink-600">Collections</a></li>
          <li><a href="#testimonials" className="hover:text-pink-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          <Link className="hover:text-pink-600" to={"/productupload"}  >Admin</Link>
        </ul>

       
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl text-gray-700 "
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <ul className= {`mt-1 pt-2 md:hidden px-6 pb-4 space-y-3 text-sm font-medium text-gray-700 bg-white shadow-md`}>
          <li><a href="#collections" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Collections</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Contact</a></li>
          <Link className="hover:text-pink-600" to={"/productupload"}  >Admin</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
