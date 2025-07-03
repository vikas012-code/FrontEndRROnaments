import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';


function App() {

  const collections = [
  { id: 1,category:"necklace", name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620',description:"The Inspiration:The Rose Gold Starfish Earrings are inspired by the divine life and the infinite divine love it stands for.The Design:The pair has a starfish-shaped design with a zircon as the centrepiece.925 Silver with Rose Gold plating AAA+ Quality Zircons Perfect for sensitive ears Dimensions: 0.9 cm x 0.9 cm Rhodium finish to prevent tarnish  Comes with the GIVA Jewellery kit and authenticity certificate Styling Tip: Style these with a brown tank top and black jeans." },
  { id: 2,category:"ring", name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s',description:"The Inspiration:The Rose Gold Starfish Earrings are inspired by the divine life and the infinite divine love it stands for.The Design:The pair has a starfish-shaped design with a zircon as the centrepiece.925 Silver with Rose Gold plating AAA+ Quality Zircons Perfect for sensitive ears Dimensions: 0.9 cm x 0.9 cm Rhodium finish to prevent tarnish  Comes with the GIVA Jewellery kit and authenticity certificate Styling Tip: Style these with a brown tank top and black jeans." },
  { id: 3,category:"bangles", name: 'Bangles', price: '₹3,299', img: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg',description:"The Inspiration:The Rose Gold Starfish Earrings are inspired by the divine life and the infinite divine love it stands for.The Design:The pair has a starfish-shaped design with a zircon as the centrepiece.925 Silver with Rose Gold plating AAA+ Quality Zircons Perfect for sensitive ears Dimensions: 0.9 cm x 0.9 cm Rhodium finish to prevent tarnish  Comes with the GIVA Jewellery kit and authenticity certificate Styling Tip: Style these with a brown tank top and black jeans." },
   { id: 4,category:"necklace", name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
  { id: 5,category:"ring", name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
  { id: 6,category:"bangles", name: 'Bangles', price: '₹3,299', img: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg' },
   { id: 7,category:"necklace", name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
  { id: 8,category:"ring", name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
  { id: 9,category:"bangles", name: 'Bangles', price: '₹3,299', img: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg' },
  { id: 10,category:"necklace", name: 'Gold Necklace', price: '₹5,999', img: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
  { id: 11,category:"ring", name: 'Silver Ring', price: '₹2,499', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
  { id: 12,category:"bangles", name: 'Bangles', price: '₹3,299', img: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg' },

]

  return (
    <>
      <div className="font-sans">
      <Navbar />
      <Outlet context={{collections}} />
      <Footer />
    </div>
    </>
  )
}

export default App
