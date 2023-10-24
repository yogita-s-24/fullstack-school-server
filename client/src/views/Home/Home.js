import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from "axios";


function Home() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const response = await axios.get('/students')
    setStudents(response.data.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, [])

  return (
    <>
      <h1 className='text-center'>All Students</h1>
      <div className="container">

        {
          students?.map((student, index)=>{
const {name, email, age, mobile} = student;
return (
  <div>
  <div key={index} className='student-cards'>
    <p><b>Name: </b> {name}</p>
    <p><b>Email: </b> 💌 {email}</p>
    <p><b>Mobile: </b> {mobile} <b>Age: </b> {age} years old.</p>
    </div>
    </div>
    )
  })
}
      </div>
    </>
  )
}

export default Home