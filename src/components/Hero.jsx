import React from 'react';
import heroPage from "../assets/heroPage.webp"
import heroPageSmalll from "../assets/HeropageImg.webp"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="z-10 relative bg-pink-50 overflow-hidden h-[90vh]">
        <img className='-z-10 blur-[2px] object-cover w-[100vw] h-full absolute top-0 brightness-50 saturate-75' src={heroPage} alt="" />
        <div className="z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center h-[90%]">
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold text-emerald-600">Elegant. Timeless. Yours.</h1>
                <p className="text-emerald-600 font-medium text-lg">
                    Discover handcrafted ornaments made with love and attention to detail.
                </p>
            <Link to={"/category"} className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
                Shop Now
            </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
                <img src={heroPageSmalll} alt="Hero" className="w-full rounded-xl shadow-lg" />
            </div>
        </div>
    </section>
  );
};

export default Hero;
