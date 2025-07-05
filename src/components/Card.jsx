import React from 'react'
import { Link } from 'react-router-dom'

function Card({item,price}) {
  
  return (
    <div className=" bg-gray-50 mx-2 p-6 rounded-xl shadow active:shadow-xl hover:shadow-xl min-w-80 w-80 min-h-90 h-90 max-sm:min-w-50 max-sm:min-h-60 max-sm:w-50 max-sm:h-60">
      <Link to={`${price?`/category/${item.category}`:`/product/${item._id}`}`} className='w-full h-full' >
        <img src={item.image} className="w-full h-[80%] object-cover rounded-lg " />
        <div className="mt-4 max-sm:mt-2 text-center">
            <h3 className="text-xl max-sm:text-lg font-semibold">{item.name}</h3>
            {!price &&<p className="text-pink-600 font-bold max-sm:text-sm">₹{item.price}</p>}        
        </div>
      </Link>
    </div>
  )
}

export default Card