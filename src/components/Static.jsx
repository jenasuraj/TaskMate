import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SiPerplexity } from "react-icons/si";
import { RxExit } from "react-icons/rx";
import { useRef } from 'react';
import { MdOutlineClear } from "react-icons/md";
import { useState } from 'react';

const Static = ({setDashboard,dashboard,finalData,setFinalData,tempArr,setTempArr}) => {
  
  const inputRef = useRef(null)
  const [filterTriggered,setFilterTriggered] = useState(false)

  const handleSubmit = ()=>{
  const searchedData = inputRef.current.value
  if(searchedData.trim()!="" && !filterTriggered){
    setFilterTriggered(true)
    setTempArr(finalData)
    setFinalData(prev=>{
    const arr = [...prev]
    const filtered = arr.filter( (item)=>item.name.toLowerCase().includes(searchedData.toLowerCase()))
    return filtered
    })}
    
  if(filterTriggered){
  setFinalData(tempArr)
  inputRef.current.value = ""
  setFilterTriggered(false) 
  }
  }

  return (
    <>
<header className='text-white flex flex-col text-center items-center gap-5 '>
   <h1 className='text-4xl flex gap-2 items-center justify-center'>Task Tracker <SiPerplexity/></h1>
   <p className='text-sm p-2'>Hey there i am suraj kumar jena and i have made this supremacy all by myself ! No ai tools, no chatGPT !</p>
   {dashboard && (
    <div className='flex justify-center  '>
    <input placeholder='Search Here By Title' ref={inputRef} className='px-6 py-2 border border-gray-600 rounded-l-full'/>
    <button className='px-6 py-2 border border-gray-600 rounded-r-full cursor-pointer' onClick={handleSubmit}>
      {filterTriggered ?  <MdOutlineClear size={20} color='white'/>  : <CiSearch size={20} color='white'/> }
      </button>
   </div>
   )}
<button className='py-1 px-3 w-fit bg-transparent cursor-pointer flex items-center gap-2 rounded-4xl border border-gray-600 text-white' onClick={()=>setDashboard(!dashboard)}> {!dashboard ? 'Dashboard':'Back'} <RxExit/> </button>
  </header>
    </>
  )
}

export default Static
