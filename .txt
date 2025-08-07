import React from 'react'
import { useState } from 'react'

const Extra = () => {
  const[formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    degree:'',})
  const [finalData,setFinalData] = useState([]) 
  const [toBeUpdated,setToBeUpdated] = useState(null) 
  const [searchData,setSearchData]=useState('')


  const handlechange = (e)=>{
  const{name,value} = e.target
  setFormData(prev=>({...prev,[name]:value})) 
  }

  const handleSubmit = ()=>{
    if(!formData.name || !formData.degree || !formData.email || !formData.password)
    { return }
    else{
      if (toBeUpdated!==null){
      setFinalData(prev=>{
        const arr = [...prev]
        arr[toBeUpdated] = formData
        return arr
      })
    setToBeUpdated(null)
      }
      else{
      setFinalData(prev=>[...prev,formData])
      }
    setFormData({
      name:'',
      degree:'',
      email:'',
      password:''
    })
    }
  }

  const deleteFunc = (index)=>{
   setFinalData(prev=>{
    const all = [...prev]
    const updated = all.filter( (_,i)=>i!==index)
    return updated
   })
  }

  const updateFunc = (index)=>{
     setFormData({
      name:finalData[index].name,
      degree:finalData[index].degree,
      email:finalData[index].email,
      password:finalData[index].password,
    })
    setToBeUpdated(index)
  }

  const search = (e)=> {
  setSearchData(e.target.value)
  if (e.key === 'Enter' && searchData)
  {
    setFinalData(prev=>{
    const arr = [...prev]
    const updated = arr.filter( (i)=> i.name.toLowerCase().includes(searchData.toLowerCase())) 
    return updated
    })
  }
  }


  return (
    <>

    <div className='bg-yellow-600 min-h-screen w-full flex justify-center items-center flex-col gap-5'>
    <h1 className='text-white text-2xl font-bold font'>Contact Manager</h1>
    <input type='text' placeholder='Seach Your feed' className='bg-white py-2 px-6 rounded-full ' onChange={search} value={searchData} onKeyDown={search}/>
     <div className='p-6 flex flex-col border border-white rounded-3xl shadow-2xl gap-2'>
      <input type="text" name='name' value={formData.name} onChange={handlechange} placeholder='Enter your name' className='bg-white py-1 px-3 '/>
      <input type="text" name='email'  value={formData.email}  onChange={handlechange} placeholder='Enter your email' className='bg-white py-1 px-3 '/>
      <input type="text" name='password' value={formData.password}   onChange={handlechange}  placeholder='Enter your password' className='bg-white py-1 px-3 '/>
      <input type="text" name='degree'  value={formData.degree}  onChange={handlechange} placeholder='Enter your degree' className='bg-white py-1 px-3 '/>
      <button className='bg-black text-white py-1 px-3' onClick={handleSubmit} >{toBeUpdated!=null ? 'Update':'Submit'}</button>
     </div>
    {finalData && (
        <div className='w-full  min-h-[10vh] flex gap-2'>
      {finalData.map( (item,index)=>{
        return(
          <div key={index} className='bg-white p-4 flex flex-col text-black w-fit h-fit rounded-2xl'>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
            <p>{item.degree}</p>
            <button className='p-1 inline-block bg-red-600 text-white' onClick={()=>deleteFunc(index)}>delete</button>
            <button className='p-1 inline-block bg-green-600 text-white' onClick={()=>updateFunc(index)}>update</button>
          </div>
        )
      })}
     </div>
    )}
    </div>
    </>
  )
}

export default Extra
