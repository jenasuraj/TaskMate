import React from 'react'
import { useState } from 'react'
import Static from './Static';
import FormPage from './FormPage';
import Dashboard from './Dashboard';

const Home = () => {
  const [dashboard,setDashboard] = useState(false)
  const [finalData,setFinalData] = useState([])
  const [toBeUpdated,setToBeUpdated] = useState(null)
  const [formData,setFormData] = useState({
        name:'',title:'',description:'',date:''
      })
  const [tempArr,setTempArr] = useState([])    

  return (
<main className=" gap-5 bg-gradient-to-b from-stone-900 to-green-900 w-full min-h-screen flex items-center justify-center roboto-condensed-suraj p-6 flex-col">
 <Static 
 setDashboard={setDashboard}
 dashboard={dashboard}
 finalData={finalData}
 setFinalData={setFinalData} 
 tempArr={tempArr}
 setTempArr={setTempArr}  
  />

 {!dashboard ? (
  <FormPage 
  setDashboard={setDashboard} 
  setFinalData={setFinalData}
  toBeUpdated={toBeUpdated}
  formData={formData}
  setFormData={setFormData}
  setToBeUpdated={setToBeUpdated}
  />
 ):(
  <Dashboard
   finalData={finalData} 
   setFinalData={setFinalData}
   setToBeUpdated={setToBeUpdated}
   setFormData={setFormData}
   setDashboard={setDashboard}/>
 )}
</main>
  ) 
}

export default Home
