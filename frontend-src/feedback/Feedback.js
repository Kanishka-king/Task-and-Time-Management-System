import React, { useState } from 'react';

import axios from 'axios';
import './feedback.css'
import Navbar from '../navbar/Navbar';

function Feedback() {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
    const handleSubmit =async (event) => {
        event.preventDefault();
    
        const formData = {
         
          email: email,
          feedback: message,
        };
        const token = localStorage.getItem('token');
        
       await axios.post('http://localhost:8181/api/v1/users/addUserFeedback', formData,{
        headers: {
          "Authorization": `Bearer ${token}`, 
        },
        
      })
          .then((response) => {
            
            console.log('Message sent successfully:', response.data);
          })
          .catch((error) => {
          
            console.error('Error sending message:', error);
          });
          setFullName('');
          setEmail('');
          setMessage('');
         
   
      };
  return (
    <div className="bdy">
      
       <div className='kkk1'><a href="/home" className='custo'>Tick Tick</a></div>
<p id='description'>Let us know Your Feedback</p>


<div class="contact-form">
          <form action="" onSubmit={handleSubmit} id="contact-form">
          
            <div class="input-box">
              <input  type="text"
                    required="true"
                    name="fullName" // Give the name attribute to identify the input field
                    placeholder='Enter a name..'
                    value={fullName} // Bind the value to the state variable
                    onChange={(e) => setFullName(e.target.value)}></input>
              
            </div>
            
            <div class="input-box">
              <input  type="email"
                    required="true"
                    name="email" // Give the name attribute to identify the input field
                    placeholder='Enter a email..'
                    value={email} // Bind the value to the state variable
                    onChange={(e) => setEmail(e.target.value)}></input>
             
            </div>
            
            <div class="input-box">
              <textarea   required={true}
                    placeholder='Enter description..'
                    name="message" // Give the name attribute to identify the input field
                    value={message} // Bind the value to the state variable
                    onChange={(e) => setMessage(e.target.value)}></textarea>
              
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>


  )
}
export default Feedback;