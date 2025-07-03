import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-pink-50 py-16 min-h-[90vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"The quality is stunning! Bought a necklace for my wife and she loved it."</p>
            <h4 className="mt-4 font-semibold">— Aarav Mehta</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Fast delivery and beautiful packaging. Highly recommend R&R Ornaments!"</p>
            <h4 className="mt-4 font-semibold">— Simran Kaur</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
