import { useState } from 'react'
import ProductUpload from './ProductUpload'

function Auth() {

    const [adminDetail,setAdminDetail]=useState({
        name:"",
        password:""
    })

    const [Auth,setAuth]=useState(false)

    function AuthUser(){
        if(import.meta.env.VITE_Name===adminDetail.name){
            if(import.meta.env.VITE_Password===adminDetail.password){
                setAuth(true)
                setAdminDetail({
                    name:"",
                    password:""
                })
            }
            else{
                alert("wrong password")
                setAdminDetail({
                    name:"",
                    password:""
                })
            }
        }
        else{
            alert("wrong User Name")
            setAdminDetail({
                    name:"",
                    password:""
                })
        }
    }

  return (
    !Auth?
    <div className=" min-h-[70vh] flex justify-center items-center rounded-2xl p-2  ">
        <form className=' shadow-lg rounded-2xl flex flex-col w-[50vw] p-10 max-sm:w-[90vw] ' onSubmit={(e)=>{
            e.preventDefault()
            AuthUser()
            }}>

            <div>
                <label className="font-bold" htmlFor="">Name<span className="text-red-600">*</span></label>
            </div>
            <input className="border border-gray-400 p-4 h-10 rounded-lg" type="text" placeholder="Enter admin Name" value={adminDetail.name} onChange={(e)=>{
                setAdminDetail({...adminDetail,name:e.target.value})
            }} required />
            <br />

            <div>
                <label className="font-bold" htmlFor="">Password<span className="text-red-600">*</span></label>
            </div>
            <input className="border border-gray-400 p-4 h-10 rounded-lg" type="password" placeholder="Enter Password" value={adminDetail.password} onChange={(e)=>{
                setAdminDetail({...adminDetail,password:e.target.value})
            }} required />
            <br />

            <button type='submit' className=" border border-gray-300 w-[20%] h-10 self-end  hover:bg-cyan-500 hover:text-white hover:scale-105 duration-300 rounded-lg">Verify</button>

        </form>
    </div>
    :
    <ProductUpload setAuth={setAuth}/>
  )
}

export default Auth