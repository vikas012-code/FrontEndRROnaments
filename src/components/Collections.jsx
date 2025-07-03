import React from 'react';

const products = [
  { id: 1, name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
  { id: 2, name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
  { id: 3, name: 'Gemstone Earrings', price: '₹3,299', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSad1oH3gZas5tkwdx0Hh7SYxldKa5oaBJwfzE_OsX8o5hBqKa_4rAvZxR0-KWC7F-8Om8&usqp=CAU' },
];

const Collections = () => {
  return (
    <section id="collections" className="py-16 bg-white min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-gray-50 p-6 rounded-xl shadow active:shadow-xl hover:shadow-xl transition">
              <img src={item.img} alt={item.name} className="w-full h-60 object-cover rounded-lg max-lg:h-100" />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-pink-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
