import React from 'react'
import { useState } from 'react'
function AddContact({addContact}) {
  const [contactsData, setContactsData] = useState({name:'' , email:''})
  function handleSubmit(){
    if(contactsData.name === '' || contactsData.email === ''){
      alert('Please fill in all fields')
      return
    }else{
      addContact(contactsData)
      setContactsData({name:'' , email:''})
    }
  }
  const handleChange = (e) =>{
    if(e.target.name === 'name'){
      setContactsData({...contactsData , name:e.target.value})
    }else{
      setContactsData({...contactsData , email:e.target.value})
    }
  }
  
  return (
    <div className='ml-4'>
      <h2 className='mb-4 text-2xl font-bold'>Add Contact</h2>
      <form>
        <label>Name:</label><br/>
        <input type="text" placeholder="Enter name" name='name' value={contactsData.name} onChange = {handleChange}/><br/>
        <label>Email:</label><br/>
        <input type="email" placeholder="Enter email" name='email' value={contactsData.email} onChange = {handleChange}/>
      </form>
      <button className='px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600' onClick={handleSubmit}>Add Contact</button>
    </div>
  )
}

export default AddContact