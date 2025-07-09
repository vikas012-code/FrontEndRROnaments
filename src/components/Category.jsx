import { useParams } from 'react-router-dom'
import Card from './Card'
import { useContext } from 'react'
import { UserContext } from './context'
import SkeletonLoading from './skelatonloading'

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

            <div className="animate-fade-in-down bg-white border border-red-200 shadow-lg rounded-xl p-8 max-w-md text-center">
              <div className="text-red-500 text-5xl mb-4">⚠️</div>
              <h1 className="text-2xl font-semibold text-red-700 mb-2">500 | Server Error</h1>
              <p className="text-red-600 mb-6">
                Oops! Something went wrong on our end. Please try again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Retry
              </button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default Category