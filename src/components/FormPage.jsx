import React from 'react'


const FormPage = ({setDashboard,setFinalData,formData,setFormData}) => {

  const handleChange = (e)=>{
    console.log("handlechange triggered")
    const {name,value} = e.target
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e)=>{
    console.log("handleSubmit triggered !")
  e.preventDefault()  
  if(!formData.name || !formData.description || !formData.title || !formData.date){ return }
  else{
    setFinalData(prev=>[...prev,formData])
    setFormData({name:'',description:'',date:'',title:''})
    setDashboard(true)
  }
  }

  return (
     <section>
        <form className='flex flex-col gap-5 border border-gray-600 p-6 rounded-2xl' onSubmit={handleSubmit}>
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
