import React, { useState } from 'react';
import './contact.css'
import axios from 'axios';
import Navbar from '../navbar/Navbar'
function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit =async (event) => {
    event.preventDefault();

    const formData = {
      name: fullName,
      email: email,
      message: message,
    };
    const token = localStorage.getItem('token');
    
   await axios.post('http://localhost:8181/cont', formData,{
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
    <div><Navbar/>
    <div className='contact-us'>
   
  <body className='conbody'>
  <section>
    
    <div class="section-header">
      <div class="container">
        <h2>Contact Us</h2>
       
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Tamilnadu, India, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>kanish@mfano.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form1">
          <form action="" onSubmit={handleSubmit} id="contact-form">
            <h2>Send Message</h2>
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
    </div>
  </section>
  </body>
    </div>
    </div>
    
)
}

export default Contact