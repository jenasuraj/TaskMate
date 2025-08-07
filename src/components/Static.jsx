import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SiPerplexity } from "react-icons/si";
import { RxExit } from "react-icons/rx";

const Static = ({setDashboard,dashboard}) => {
  return (
    <>
<header className='text-white flex flex-col text-center items-center gap-5 '>
   <h1 className='text-4xl flex gap-2 items-center justify-center'>Task Tracker <SiPerplexity/></h1>
   <p className='text-sm p-2'>Hey there i am suraj kumar jena and i have made this supremacy all by myself ! No ai tools, no chatGPT !</p>
   <div className='flex justify-center  '>
    <input placeholder='Search Here By Title' className='px-6 py-2 border border-gray-600 rounded-l-full'/>
    <button className='px-6 py-2 border border-gray-600 rounded-r-full cursor-pointer'><CiSearch size={20} color='white'/></button>
   </div>
<button className='py-1 px-3 w-fit bg-transparent cursor-pointer flex items-center gap-2 rounded-4xl border border-gray-600 text-white' onClick={()=>setDashboard(!dashboard)}> {!dashboard ? 'Dashboard':'Back'} <RxExit/> </button>
  </header>
    </>
  )
}

export default Static
