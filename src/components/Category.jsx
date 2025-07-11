import { useParams } from 'react-router-dom'
import Card from './Card'
import { useContext } from 'react'
import { UserContext } from './context'
import SkeletonLoading from './skelatonloading'
import ServerError from './ServerError'

function Category() {
    const {Id}=useParams()

    const {collections ,fetchdata}=useContext(UserContext)

    

    console.log(collections ,fetchdata)

    const filterdata=collections.filter((item)=> Id?item.category==Id : true) 

  return (
    <section className="py-6 bg-white min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our {Id?Id:"Products"}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {
          fetchdata?

          collections.length===0?
          Array(6).fill(0).map((item,i)=>(<div key={i}><SkeletonLoading/></div>) )
          :
          filterdata.map(item => ( 
            <Card key={item._id} item={item} />
          ))

          :
           <ServerError/> 
          }
        </div>
      </div>
    </section>
  )
}

export default Category