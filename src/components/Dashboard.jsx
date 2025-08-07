import React from 'react'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";

const Dashboard = ({finalData}) => {
    
  return (
 <section className='w-full flex flex-col gap-5 border border-gray-600 p-4 rounded-2xl lg:w-1/2 h-auto items-center justify-center'>
  {!finalData.length == 0 ? (
   <div className='flex gap-2 flex-col w-full'>
   {finalData.map((item,index)=>{
    return(
  <div key={index} className='flex flex-col lg:flex-row bg-gray-400 w-full h-auto px-4 py-6 rounded-xl  gap-5 shadow-md'>
  <div className='grid grid-cols-2 gap-4'>
    <p className='font-semibold text-right'>Name:</p>
    <p className='text-left'>{item.name}</p>

    <p className='font-semibold text-right'>Title:</p>
    <p className='text-left'>{item.title}</p>

    <p className='font-semibold text-right'>Description:</p>
    <p className='text-left   '>{item.description}</p>

    <p className='font-semibold text-right'>Date:</p>
    <p className='text-left'>{item.date}</p>
  </div>
  <div className='flex flex-row lg:flex-col gap-5 justify-center  items-center'>
    <button><MdDelete color='red' size={25}/></button>
    <button><RxUpdate color='green' size={25}/></button>
    <button><BsStopwatch color='blue' size={25}/></button>
  </div>
</div>
    )
   })}
   </div>
  ):<p className='text-white text-sm'>Nothing to show here !, Try adding some tasks </p>}
  </section>
  )
}

export default Dashboard
