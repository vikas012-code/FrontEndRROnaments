import { useOutletContext, useParams } from 'react-router-dom'
import Card from './Card'

function Category() {
    const {Id}=useParams()

    const {collections}=useOutletContext()

    console.log(collections)

    const filterdata=collections.filter((item)=> Id?item.category===Id : true)

  return (
    <section className="py-6 bg-white min-h-[90vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our {Id?Id:"Products"}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {filterdata.map(item => ( 
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category