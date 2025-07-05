import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';


function App() {

  const [collections ,setCollections] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/products")
    .then((res)=> res.json())
    .then((res)=> setCollections(res))
  },[])

  console.log(collections)
  

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
