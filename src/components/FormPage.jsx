import React from 'react'
import { useState } from 'react'

const FormPage = ({setDashboard,setFinalData}) => {
    const [formData,setFormData] = useState({
        name:'',title:'',description:'',date:'0002-02-01T17:02'
      })

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
     <section>
        <form className='flex flex-col gap-5 border border-gray-600 p-6 rounded-2xl' onClick={handleSubmit}>
          <input name='name' type="text"  placeholder='Enter Name' value={formData.name} className='bg-white py-3 px-10 ' onChange={handleChange}/>
          <input name='title' type="text" placeholder='Enter title' value={formData.title} className='bg-white py-3 px-10 ' onChange={handleChange}/>
          <input name='description' type="text" placeholder='Enter Description' value={formData.description} className='bg-white py-3 px-10' onChange={handleChange}/>
          <input name='date' type="datetime-local"  className='bg-white py-3 px-10 ' value={formData.date} onChange={handleChange}/>
          <button className='bg-black text-white border border-gray-500 py-4 px-10 cursor-pointer' type='submit'>Submit</button>
        </form>
      </section>
  )
}

export default FormPage
