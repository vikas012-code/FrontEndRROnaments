import React from 'react'
import { useState } from 'react'
import ProductUpload from './ProductUpload'
import AdminProductListing from './AdminProductListing'
import Loading from './Loading'

function AdminPanel({setAuth}) {

    const [ProductIsUploading,setProductIsUploading]=useState(false)

    const[addPoductToggle,setAddProductToggle]=useState(false)
  return (
    <>
    {
        ProductIsUploading
        &&
        <div className=' fixed top-0 w-[99vw] h-[100vh] z-50 cursor-progress  backdrop-blur-[1px] backdrop-brightness-80'>
        <p className=' text-2xl text-pink-500 absolute top-[40%] left-[45%]'>Product Adding...</p>
        <Loading/>
        </div>
    }
    <div className="pb-10 mt-10 flex flex-col items-center gap-5 relative">
                <h3 className=" self-start p-5 -mt-7 font-bold  text-3xl">
                    Product Page
                </h3>
                {
                addPoductToggle?
                <div className="z-10 w-[93%] bg-white min-h-100 rounded-2xl p-2  ">
                    <ProductUpload props={{setAddProductToggle,setAuth , setProductIsUploading}}/>
                </div>
                :
                <div className="bg-white w-[93%] p-10 rounded-2xl flex  items-center justify-end  relative">
                    
                    <button className=" border border-pink-400  h-20 min-w-50 rounded-xl hover:bg-pink-400 hover:text-white hover:scale-105 duration-300" 
                    onClick={()=>{
                        setAddProductToggle(true)
                    }}>
                        Add New Product
                    </button>
                    
                </div>
                }
                <AdminProductListing/>
            </div>
    
    </>
  )
}

export default AdminPanel