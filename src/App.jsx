import { useState , useEffect} from 'react'
import './App.css'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const [contacts , setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect (() => {
    localStorage.setItem('contacts' , JSON.stringify(contacts))
  },[contacts])
  
  const addContact = (data) =>{
    setContacts([...contacts , {id:nanoid() , data}])
  }
  const handleDelete = (id) =>{
    const updatedList = contacts.filter((val) => {
      return val.id !== id
    })
    setContacts(updatedList)
  }
  return (
    <>
    <h1 className = 'p-4 text-3xl text-center text-white bg-green-700 '>Contact Manager</h1>
    <AddContact addContact={addContact}/>
    <ContactList contacts = {contacts } handleDelete={handleDelete}/>
    </>
  )
}

export default App
