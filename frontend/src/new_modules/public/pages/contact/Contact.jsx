import React from 'react'
import "./Contact.scss"
import { useNavigate } from 'react-router'
function Contact() {
    const navigate = useNavigate()
  return (
    <div className='contact-div'>
        <h1>Contact</h1>
        <button onClick={()=>navigate("/")}>Back</button>
    </div>
  )
}

export default Contact