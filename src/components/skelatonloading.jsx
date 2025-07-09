import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoading() {

    return (
      
        <div className='w-70 max-lg:w-40 h-90 max-lg:h-50 ml-4 flex flex-col gap-2 max-lg:gap-1 shadow-lg mb-4 rounded-xl'>
          <div className='w-full h-[70%] pt-6 px-6 mb-2'>
            {<Skeleton className=' rounded-2xl h-full'/>}
          </div>
          <div className='w-full h-[25%] flex flex-col gap-2 max-lg:gap-1 items-center'>
            <p className='w-[65%] h-[35%]'> {<Skeleton className='w-full h-full'/>}</p>
            <div className='w-full h-[30%] flex gap-1 justify-center'>
                <div className='w-[46%]'>{<Skeleton className='w-full h-full'/>}</div>
                {/* <div className='w-[46%]'>{<Skeleton className='w-full h-full'/>}</div> */}
            </div>
          </div>
      </div>
      
    )
  }