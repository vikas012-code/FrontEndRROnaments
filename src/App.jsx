import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';
import { UserContext } from './components/context';


function App() {

  const [collections ,setCollections] = useState([])

  const [fetchdata,setFetchData]=useState(true)

  useEffect(()=>{
    // fetch("https://r-r-ornaments-backend.onrender.com")
    // .then((res)=> res.json())
    // .then((res)=> {
    //   console.log(res)
    //   // alert("data is loading...")

      fetch("https://r-r-ornaments-backend.onrender.com/products")
      .then((res)=> res.json())
      .then((res)=> {
        setCollections([...res])
        setFetchData(true)
        // alert("data is loaded!")
      })
    // })
    .catch((err)=> {
      console.log(err)
      setFetchData(false)
      // alert("something went wrong..")
    })

  },[])

  console.log(collections)

//   const collections = [
//   { _id: 1,category:"necklace", name: 'Gold Necklace', price: '₹5,999', image: 'https://www.cuchara.ca/cdn/shop/products/DAINTYHEARTONSINGAPOREcopy.jpg?v=1663453620' },
//   { _id: 2,category:"ring", name: 'Silver Ring', price: '₹2,499', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhxCFBtZSC00oLmjfCDIY1WTuW6M2lPs2DA&s' },
//   { _id: 3,category:"bangles", name: 'Bangles', price: '₹3,299', image: 'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64b7c91d3a2c4600127d44a9/cat_img/Latest_Gold_Bangles_Design_2025_Best_Gold_Plated_Bangles_M0RB5TFDN9_2024-12-31_1.jpg' },
// ];
  

  return (
    <UserContext.Provider value={{collections ,fetchdata}}>
      <div className="font-sans">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
