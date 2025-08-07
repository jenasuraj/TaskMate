import React from 'react'
import { useState } from 'react'
import { RxExit } from "react-icons/rx";
import { SiPerplexity } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const [formData,setFormData] = useState({
    name:'',title:'',description:'',date:'0002-02-01T17:02'
  })
  const [finalData,setFinalData] = useState([])
  const [dashboard,setDashboard] = useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData(prev=>({...prev,[name]:value}))
  }

  const checkAmPm = (check)=>{
    const checkArr = check.split(":")
    if (checkArr[0]<12) { return "AM" }
    else { return "PM" }
  }
  const timeFixer = (time)=>{
    let final = null
    const actual = time.split(":")
    const timeSlice = parseInt(actual[0])
    if(timeSlice>12) 
      { 
        final = timeSlice-12 
        const mostFinal = String(final)+":"+actual[1] 
        return mostFinal 
      }
      else{
        return time
      }
  } 
  const RemoveT = (data) =>{
    const tobe = data.date
    const updated = tobe.split('T') 
    updated[1] = timeFixer(updated[1]) +" "+checkAmPm(updated[1])
    const final = updated.join(' ')
    const toBeSent = {...data,date:final}
    //But in React or good JavaScript practices, we do not directly mutate objects. Instead, 
    // we use the spread operator to copy the object and update its values immutably.
    return toBeSent 
  }

  const handleSubmit = (e)=>{
  e.preventDefault()  
  if(!formData.name || !formData.description || !formData.title || !formData.date){ return }
  else{
    setFinalData(prev=>[...prev,RemoveT(formData)])
    setFormData({name:'',description:'',date:'',title:''})
    setDashboard(true)
  }
  }

  return (
<main className=" gap-5 bg-gradient-to-b from-stone-900 to-green-900 w-full min-h-screen flex items-center justify-center roboto-condensed-suraj p-6 flex-col">
  
  <header className='text-white flex flex-col text-center gap-2 '>
   <h1 className='text-4xl flex gap-2 items-center justify-center'>Task Tracker <SiPerplexity/></h1>
   <p className='text-sm p-2'>Hey there i am suraj kumar jena and i have made this supremacy all by myself ! No ai tools, no chatGPT !</p>
   <div className='flex justify-center  '>
    <input placeholder='Search Here By Title' className='px-6 py-2 border border-gray-600 rounded-l-full'/>
    <button className='px-6 py-2 border border-gray-600 rounded-r-full cursor-pointer'><CiSearch size={20} color='white'/></button>
   </div>
  </header>

 {!dashboard ? (
   <section>
    <form className='flex flex-col gap-5 border border-gray-600 p-6 rounded-2xl' onClick={handleSubmit}>
      <input name='name' type="text"  placeholder='Enter Name' value={formData.name} className='bg-white py-3 px-10 ' onChange={handleChange}/>
      <input name='title' type="text" placeholder='Enter title' value={formData.title} className='bg-white py-3 px-10 ' onChange={handleChange}/>
      <input name='description' type="text" placeholder='Enter Description' value={formData.description} className='bg-white py-3 px-10' onChange={handleChange}/>
      <input name='date' type="datetime-local"  className='bg-white py-3 px-10 ' value={formData.date} onChange={handleChange}/>
      <button className='bg-black text-white border border-gray-500 py-4 px-10 cursor-pointer' type='submit'>Submit</button>
    </form>
  </section>
 ):(
  <section className='w-full flex flex-col gap-5 border border-gray-600 p-4 rounded-2xl lg:w-1/2 h-auto items-center justify-center'>
    <button className='py-1 px-3 w-fit bg-transparent cursor-pointer flex items-center gap-2 rounded-4xl border border-gray-600 text-white' onClick={()=>setDashboard(false)}>     Back  <RxExit/> </button>
   <div className='flex gap-2 flex-col w-full'>
   {finalData.map((item,index)=>{
    return(
  <div key={index} className='bg-gray-400 w-full h-auto px-4 py-6 rounded-xl flex gap-5 shadow-md'>
  <div className='grid grid-cols-2 gap-4'>
    <p className='font-semibold text-right'>Name:</p>
    <p className='text-left'>{item.name}</p>

    <p className='font-semibold text-right'>Title:</p>
    <p className='text-left'>{item.title}</p>

    <p className='font-semibold text-right'>Description:</p>
    <p className='text-left w-60 h-auto '>{item.description}</p>

    <p className='font-semibold text-right'>Date:</p>
    <p className='text-left'>{item.date}</p>
  </div>
  <div className='flex flex-col gap-5 justify-center  items-center'>
    <button><MdDelete color='red' size={25}/></button>
    <button><RxUpdate color='green' size={25}/></button>
    <button><BsStopwatch color='blue' size={25}/></button>
  </div>
</div>
    )
   })}
   </div>
  </section>
 )}
</main>
  ) 
}

export default Home