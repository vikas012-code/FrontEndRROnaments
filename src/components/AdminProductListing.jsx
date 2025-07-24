import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context'

function AdminProductListing() {
    const {collections,setRefresh}=useContext(UserContext)

    async function deleteProduct(productId){
        
        setProductIsUploading(true)
        try{
            const respose = await fetch("https://r-r-ornaments-backend.onrender.com/products/deleteproductbyid",{
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            _id:productId
                        })
                    })
        const res2= await respose.json()
        
        console.log(res2)
        alert("Product deleted succesfully!...")
        setProductIsUploading(false)
        return true
        setRefresh(prev=> !prev)
        } 
        catch (error) {
            setProductIsUploading(false)
            alert("something went wrong?...")
            console.log(error)
        }
        
    }


    async function ChangeProductQuantity(productId,productQuantity){
        
        setProductIsUploading(true)
        try{
            const respose = await fetch("https://r-r-ornaments-backend.onrender.com/products//changequantityinstock",{
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            _id:productId,
                            quantity:productQuantity
                        })
                    })
        const res2= await respose.json()
        
        console.log(res2)
        
        setProductIsUploading(false)
        return true
        setRefresh(prev=> !prev)
        } 
        catch (error) {
            setProductIsUploading(false)
            alert("something went wrong?...")
            console.log(error)
        }
        
    }


    // async function productQuantityToOutOfStock(productId){
        
    //     setProductIsUploading(true)
    //     try{
    //         const respose = await fetch("https://r-r-ornaments-backend.onrender.com/products/uploadproduct",{
    //                     method: "PATCH",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify({
    //                         _id:productId
    //                     })
    //                 })
    //     const res2= await respose.json()
        
    //     console.log(res2)
    //     alert("Product deleted succesfully!...")
    //     setProductIsUploading(false)
    //     return true
    //     } 
    //     catch (error) {
    //         setProductIsUploading(false)
    //         alert("something went wrong?...")
    //         console.log(error)
    //     }
        
    // }
    
  return (
    <>
    <div className="bg-white w-[93%] pb-6 rounded-2xl flex flex-col items-center">
        <div className=" border-b-2 border-gray-300 w-[90%] py-4">
            <h3 className="text-2xl font-bold max-lg:text-lg">All Product Listing</h3>
        </div>
        <div className="w-[90%] text-center">
            <div className="border-b-2 border-gray-300 text-xl opacity-40 max-lg:text-sm">
                <div className="h-20 flex justify-between items-center">
                    <p className=" w-[42%] flex place-items-start pl-4 max-sm:w-[35%]">Product</p>
                    <p className=" w-[23%]">Product_id</p>
                    <p className=" w-[13%]">Price</p>
                    <p className=" w-[12%]">Stock</p>
                    <p className=" w-[6%] max-sm:w-[20%]"></p>
                </div>
            </div>
            <div className="w-[100%] flex flex-col">
                {
                    collections.map((item)=>(
                        <div key={item?._id} className=" relative">
                            <div  className="h-20 flex justify-between items-center border-b-2 border-gray-400 relative max-lg:text-xs max-sm:text-[0.5rem]">
                                <div className="flex w-[42%] items-center max-sm:w-[35%]">
                                    <div className="w-15 h-15 mr-4 max-sm:w-25 max-sm:h-25">
                                        <img className="w-full h-full object-contain " src={item.image} alt="" />
                                    </div>
                                    <p className="w-50 h-12 text-wrap truncate text-left flex items-center">{item.name}</p>
                                </div>
                                <p className=" w-[23%]  max-sm:truncate">#{item._id}</p>
                                <p className=" w-[13%] ">₹{item.price}</p>
                                <button onClick={()=>{
                                    ChangeProductQuantity(item._id,item.quantity)
                                }} className=" w-[15%]  border p-2 rounded-xl text-sm text-pink-400 active:text-white active:bg-pink-400 duration-300 max-sm:rounded-lg max-sm:text-[0.5rem] mr-1">{item.quantity?"InStock":"OutOfStock"}</button>
                                <button onClick={()=>{
                                    deleteProduct(item._id)
                                }} className=' text-red-500 border p-2 rounded-xl text-sm active:text-white active:bg-red-500 duration-300 max-sm:rounded-lg max-sm:text-[0.5rem]'>Delete</button>
                            </div>
                        </div>
                        
                    ))
                }

            </div>
        </div>
    </div>
    </>
  )
}

export default AdminProductListing