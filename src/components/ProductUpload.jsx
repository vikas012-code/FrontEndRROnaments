import { useState } from 'react'

function ProductUpload({setAuth}) {

    const [image,setImage]=useState(null)

    const formData = new FormData();
    formData.append('files',image);
    
    const [productDetail,setPoductDetail]=useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    discount:0,
    quantity:true
    })

    async function AddNewProduct(){
        try {
            const respose = await fetch("https://r-r-ornaments-backend.onrender.com/products/uploadimage",{
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                body: formData
            })
        const res= await respose.json()
        console.log(res)


        try {
            const respose2 = await fetch("https://r-r-ornaments-backend.onrender.com/products/uploadproduct",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: productDetail.name,
                            price: productDetail.price,
                            description:productDetail.description,
                            category: productDetail.category,
                            discount:productDetail.discount,
                            quantity:productDetail.quantity,
                            image:res
                        })
                    })
        const res2= await respose2.json()
        
        console.log(res2)
        alert("Product added succesfully!...")
        setPoductDetail({
            name: "",
            price: 0,
            description: "",
            category: "",
            discount:0,
            quantity:true
            })
        setImage(null)
        return true

        } 


        catch (error) {
            alert("something went wrong?...")
            console.log(error)
        }
        
        } catch (error) {
            console.log(error)
            alert("something went wrong?...")
            return false
        }
    }


  return (
    <div className="z-10 w-[93%] bg-white min-h-100 rounded-2xl p-2  ">
        <form className="flex flex-col " onSubmit={(e)=>{
            e.preventDefault()
            AddNewProduct()
        }}>
            <h3 className=" text-2xl font-bold flex pl-4 pt-4">Add New Product</h3>
            <div className="flex justify-evenly p-4 max-sm:flex-col">
                <div className="flex flex-col  w-[48%] max-sm:w-full">
                    <div>
                        <label className="font-bold" htmlFor="">Product Name<span className="text-red-600">*</span></label>
                    </div>
                    <input className="border border-gray-400 p-4 h-10 rounded-lg" type="text" placeholder="Enter Name/Title of Product" value={productDetail.name} onChange={(e)=>{
                        setPoductDetail({...productDetail,name:e.target.value})
                    }} required />
                    <br />
                    <div>
                        <label className="font-bold" htmlFor="">Image<span className="text-red-600">*</span></label>
                    </div>
                    <input className="border border-gray-400 p-4 h-10 rounded-lg" type="file" placeholder="insert Link Of Image"  onChange={(e)=>{
                        setImage(e.target.files[0])
                    }} required/>
                    <br />

                    <div>
                        <label className="font-bold" htmlFor="">Price<span className="text-red-600">*</span> </label>
                    </div>
                    <input className="border border-gray-400 p-4 h-10 rounded-lg" type="number" placeholder="Enter Price Of Product" value={productDetail.price} onChange={(e)=>{
                        e.target.value>=0 &&
                        setPoductDetail({...productDetail,price:e.target.value})
                    }} required/>
                    <br />

                    <div>
                        <label className="font-bold" htmlFor="">Description<span className="text-red-600">*</span></label>
                    </div>
                    <textarea className=" border border-gray-400 p-4 h-54 max-h-55 min-h-54 rounded-lg" type="text" placeholder="Enter Description Of Product...it" value={productDetail.description} onChange={(e)=>{
                        setPoductDetail({...productDetail,description:e.target.value})
                    }} required/>
                    <br />
                </div>

                <div className="flex flex-col w-[48%] max-sm:w-full">

                    <div>
                        <label className="font-bold" htmlFor="">category<span className="text-red-600">*</span></label>
                    </div>
                    <select className="border border-gray-400 h-10  rounded-lg"  value={productDetail.category}
                    onChange={(e)=>{
                        setPoductDetail({...productDetail,category:e.target.value}) }}>
                        <option value="" hidden={true}></option>
                        <option value="necklace">necklace</option>
                        <option value="ring">ring</option>
                        <option value="bangles">bangles</option>
                    </select>
                    <br />

                    <div>
                        <label className="font-bold" htmlFor="">discount</label>
                    </div>
                    <input className="border border-gray-400 p-4 h-10 rounded-lg" type="number" placeholder="Enter Discount Available in Product" value={productDetail.discount} onChange={(e)=>{
                        e.target.value>=0 &&
                        setPoductDetail({...productDetail,discount:e.target.value})
                    }}/>
                    <br />

                    <div>
                        <label className="font-bold" htmlFor="">quantity<span className="text-red-600">*</span></label>
                    </div>
                    <input className="border border-gray-400 p-4 h-10 rounded-lg" type="text" placeholder="Enter Total Quantity of Product" value={productDetail.quantity} onChange={(e)=>{
                        setPoductDetail({...productDetail,quantity:e.target.value})
                    }} required/>
                    <br />
                </div>
            </div>
            <div className=" flex justify-around px-4 pb-4">
                <button type='button' className=" border border-gray-300 w-[20%] h-10 self-end  hover:bg-cyan-500 hover:text-white hover:scale-105 duration-300 rounded-lg" onClick={()=>{
                    setPoductDetail({
                        name: "",
                        price: 0,
                        description: "",
                        category: "",
                        discount:0,
                        quantity:true
                        })
                    ||
                    setImage(null)
                    ||
                    setAuth(false)
                }}>Cancel</button>
                <button className=" border border-gray-300 w-[20%] h-10 self-end bg-cyan-500 text-white  hover:bg-white hover:text-black hover:scale-105 duration-300 rounded-lg max-lg:w-fit" type="submit">Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default ProductUpload