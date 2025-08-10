import React from 'react'
import { BiTrashAlt } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Dashboard = ({finalData,setFinalData,setToBeUpdated,setFormData,setDashboard}) => {

     const navigate = useNavigate('') 


    const deleteFunc = (index)=>
    {
      setFinalData(prev =>{
        const arr = [...prev]
        const newArr = arr.filter( (_,i)=>i!= index)
        return newArr
      })
    }

    const dataFormatter = (date)=> {  // 2025-10-10 5:05 PM to 2025-12-12T17:50
    console.log("Came to date formatter !")    
    const newArrDate = date.split(' ')
    let left = newArrDate[0]
    let right = newArrDate[1]
    const rightArr = right.split(':')
    if(newArrDate[2] == 'PM'){
        rightArr[0] = parseInt(rightArr[0])+12
    }
    const rigthSection = rightArr.join(':') //15:05
    const final = left + "T" +rigthSection
    console.log("final is",final)
    return final
    }

    const updateFunc = (index)=>{
     console.log("update button clicked !")
     setToBeUpdated(index)
     setFormData({
        name:finalData[index].name,
        date:dataFormatter(finalData[index].date),
        description:finalData[index].description,
        title:finalData[index].title
     })
     setDashboard(false)
    }
    
  return (
 <section className='w-full flex flex-col gap-5 border border-gray-600 p-4 rounded-2xl lg:w-1/2 h-auto items-center justify-center'>
  {!finalData.length == 0 ? (
   <div className='flex gap-2 flex-col w-full'>
   {finalData.map((item,index)=>{
    return(
  <div key={index} className='flex flex-col lg:flex-row bg-gray-400 w-full h-auto px-4 py-6 rounded-xl  gap-5 shadow-md lg:gap-10'>
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
    <button onClick={()=>deleteFunc(index)} className='cursor-pointer'><BiTrashAlt color='red' size={25}/></button>
    <button onClick={()=>updateFunc(index)}  className='cursor-pointer'><RxUpdate color='green' size={25}/></button>
    <button   onClick={()=>navigate("/secret")}   className='cursor-pointer text-black'><BsStopwatch color='blue' size={25}/> </button>

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
