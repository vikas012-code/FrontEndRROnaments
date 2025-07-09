import { useOutletContext, useParams } from 'react-router-dom'
import Card from './Card'
import { useContext } from 'react'
import { UserContext } from './context'

function ProductDetail() {
    const {Id}=useParams()
    const {collections}=useContext(UserContext)

    function arrayOfProduct(type,value){
        let array=[]

        array=collections.filter((item)=>  item[type].includes(value))

        return array
    }

    const productdata=collections.filter((item)=>item._id==Id)[0]
    //console.log(productdata)
  return (
    <div className='min-h-[80vh] bg-white flex flex-col relative items-center py-5'> 
    {
        productdata
        &&
        <>
        {/* <div className='w-[70%] min-h-[80vh] flex justify-center p-4 max-sm:w-full max-sm:flex-col max-sm:items-center'>
            <div className='min-w-[60vh] max-w-[40vh]  h-[80vh] max-sm:h-[90vw]  relative shadow-lg max-sm:min-w-[70vw] '>
                <button className='absolute  top-0 right-4 cursor-pointer text-gray-300 focus:text-red-500'><p className=' text-7xl max-sm:text-5xl'>♥</p></button>
                <img className='w-full h-full object-cover'  src={productdata.image} alt="" />
            </div>
            <div className='w-[40%] flex flex-col items-center justify-center max-sm:w-[80%] max-sm:mt-4'>
                <p className=' text-3xl font-bold max-sm:text-lg'>{productdata.name}</p>
                <p className=' text-2xl font-medium opacity-70 max-sm:text-lg'>₹{productdata.price}</p>
            </div>
        </div> */}

        {/* <div className='w-[70%] min-h-[40vh] mt-6 flex justify-center max-sm:w-full'>
            <div className='w-[80%]'>
                <h3 className='text-xl font-bold mb-4 max-sm:text-lg' >Product Description-</h3>
                <hr className=' opacity-40 border-b' />
                <p className='text-lg max-sm:text-sm'>{productdata.description}</p>
            </div>
        </div> */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-start">
    
        <div className=' relative'>
          <img
            src={productdata.image}
            alt={productdata.name}
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
          {/* <button className='absolute  top-0 right-4 cursor-pointer text-gray-300 focus:text-red-500'><p className=' text-7xl max-sm:text-5xl'>♥</p></button> */}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{productdata.name}</h1>
          <p className="text-xl text-pink-600 font-semibold">₹{productdata.price}</p>
          <p className="text-gray-700 leading-relaxed">
            {`This handcrafted ${productdata.category} is perfect for weddings and special occasions. Featuring intricate details and a timeless design, it adds elegance to any outfit`}
          </p>

          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-xl transition flex gap-2 items-center">
            Add to WishList <p className='text-2xl'>♥</p>
          </button>

          <div className="border-t pt-6 space-y-2">
            <h2 className="text-lg font-semibold">Product Details</h2>
            <div className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <p>{productdata.description}</p>
            </div>
          </div>
        </div>
        </div>

         <div className='w-[100%] mt-6 flex justify-center  max-sm:w-full'>
            <div className='w-[90%]  max-sm:w-full p-2'>
                <h3 className='text-xl font-bold mb-4' >Similar Product</h3>
                <hr className=' opacity-40 border-b' />
                <div className='mt-4 flex items-center gap-1 overflow-x-scroll overflow-y-hidden'>
                    {arrayOfProduct("category",productdata.category).map((item)=>(
                        <Card key={item._id} item={item}/>
                    ))}
                </div>
            </div>
        </div>


        <div className='w-[100%] mt-6 flex justify-center  max-sm:w-full'>
            <div className='w-[90%]  max-sm:w-full p-2'>
                <h3 className='text-xl font-bold mb-4' >Product You May Like</h3>
                <hr className=' opacity-40 border-b' />
                <div className='mt-4 flex items-center gap-1  overflow-x-scroll overflow-y-hidden '>
                    {arrayOfProduct("name",productdata.name).map((item)=>(
                        <Card key={item._id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    }
    </div>
  )
}

export default ProductDetail