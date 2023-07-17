import React from 'react'
import './contact.css'
// import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
function Contact() {
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
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
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
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""></input>
              <p>Full Name</p>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""></input>
             <p>Email</p>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <p>Type your Message...</p>
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