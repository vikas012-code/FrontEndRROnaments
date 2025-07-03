import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const collections = [
  { id: 1,category:"necklace", name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
  { id: 2,category:"ring", name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
  { id: 3,category:"bangles", name: 'Bangles', price: '₹3,299', img: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg' },
];

const Collections = () => {
  return (
    <section id="collections" className="py-16 bg-white min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Collections</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {collections.map((item) => (
            <Card item={item} price={"no"}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
