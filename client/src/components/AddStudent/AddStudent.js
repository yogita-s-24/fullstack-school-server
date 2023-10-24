import React, { useState } from 'react'
import axios from "axios";
import './AddStudent.css';

function AddStudent() {
  const [name,setName] =useState('')
  const[age, setAge]=useState('')
  const[mobile,setMobile]=useState('')
  const[email,setEmail]=useState('')

  const addStudent = async () =>{
   if(!name || !email || !mobile ||!age ){
      return alert("All fields are required");
     
    }

    const student ={
      name,
      age,
      email,
      mobile
    }

    const response = await axios.post('/students',student);

    alert(response.data.message)

    setName('')
    setAge('')
    setEmail('')
    setMobile('')
  }

  return (
    <div>
      <h1>Add Student</h1>
      <form>
        <input type="text" 
        placeholder='name'
         className='input-box' 
         value={name}
          onChange={(e)=>{
          setName(e.target.value)
        }}/>

        <input type="email"
         placeholder='email'
          className='input-box' 
          value={email} 
          onChange={(e)=>{
          setEmail(e.target.value)
        }}/>

        <input type="text"
         placeholder='Enter Mobile'
          className='input-box' 
          value={mobile} 
          onChange={(e)=>{
          setMobile(e.target.value)
        }}/>

        <input type="text"
         placeholder='Enter Age'
          className='input-box' 
          value={age} 
          onChange={(e)=>{
          setAge(e.target.value)
        }}/>

<button type="button" onClick={addStudent}>Add Student</button>

      </form>
    </div>
  )
}

export default AddStudent