import React from 'react'
import { useState } from 'react'

const FormPage = ({setDashboard,setFinalData,formData,setFormData,toBeUpdated,setToBeUpdated}) => {

 const [error,setError] = useState('')  
 let date = new Date();
 
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
      }}

  const checkDate = (wholeDate)=>{ 
  const date = new Date()
  const splitted = wholeDate.split('-')
  if(splitted[0]<date.getFullYear()){
    return true
  }
  else if(splitted[1]<date.getMonth()+1 && splitted[0] == date.getFullYear()){
    return true
  }
  else if(splitted[2]<date.getDate() && splitted[0] == date.getFullYear() && splitted[1] == date.getMonth()+1){
    return true
  }
  else{
  return false
  }
  }

  const isToday = (data)=>{ 
  const splitted = data.split('-')
  if(date.getFullYear()-splitted[0] == 0 && (date.getMonth()+1)-splitted[1]==0 && date.getDate()-splitted[2]==0){
    return true
  }
  else{
    return false
  }
  }


  const checkTime = (time)=>{
    if(checkDate(time[0])){
      return false
   }
  else if(isToday(time[0])){
     const clockTime = time[1].split(':')
     if(date.getHours()>clockTime[0])
     { 
      return false
     }
     else{
      return true
     }
   }
   else{
    return true
   } 
  }

  const RemoveT = (data) =>{
    const tobe = data.date
    const updated = tobe.split('T')
    updated[1] = timeFixer(updated[1])+" "+checkAmPm(updated[1])
    const final = updated.join(' ')
    const toBeSent = {...data,date:final}
    //But in React or good JavaScript practices, we do not directly mutate objects. Instead, 
    // we use the spread operator to copy the object and update its values immutably.
    return toBeSent
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e)=>{
  e.preventDefault()  
  if(!formData.name || !formData.description || !formData.title || !formData.date)
    { setError('Fill all input fields')
      return
    } 
  const updated = formData.date.split('T')
  if(!checkTime(updated)){
     console.log("finally checktime is false so error message and return")
     setError("date issue")
     return
    }
  else{
    if(toBeUpdated!=null){
        setFinalData(prev=>{
            const arr = [...prev]
            arr[toBeUpdated] = RemoveT(formData)
            return arr
        })
    }
    else { setFinalData(prev=>[...prev,RemoveT(formData)]) }
    setFormData({name:'',description:'',date:'',title:''})
    setDashboard(true)
    setToBeUpdated(null)
  }
  }
  return (
     <section>
        <form className='flex flex-col gap-5 border border-gray-600 p-6 rounded-2xl' onSubmit={handleSubmit}>
          <input name='name' type="text"  placeholder='Enter Name' value={formData.name} className='bg-white py-3 px-10 ' onChange={handleChange}/>
          <input name='title' type="text" placeholder='Enter title' value={formData.title} className='bg-white py-3 px-10 ' onChange={handleChange}/>
          <input name='description' type="text" placeholder='Enter Description' value={formData.description} className='bg-white py-3 px-10' onChange={handleChange}/>
          <input name='date' type="datetime-local"  className='bg-white py-3 px-10 ' value={formData.date} onChange={handleChange}/>
          <button className='bg-black text-white border border-gray-500 py-4 px-10 cursor-pointer' type='submit'>{toBeUpdated != null ? 'Update': 'Submit'}</button>
          {error && <p className='text-red-500 text-center'>Error: {error}</p>}
        </form>
      </section>
  )
}

export default FormPage
