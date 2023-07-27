import React from 'react'
import './Loginfirst.css'



import { useForm } from "react-hook-form";

const Loginfrist = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
	<div className='rbody'>
	<center>
    <div className="App__form">
      <h1><center>Login as</center></h1>
	  <form onSubmit={handleSubmit(onSubmit)}>
	  <center>
	  <div className='container-rlog'>
	  <a href="./loginadmin" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#9932cc"/>
				<stop offset="100%" stop-color="#00ffff" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>User</p>
	</a>
	</div>
	</center> 
	<center>
	  <div className='container-rlog'>
	  <a href="./loginleader" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#9932cc"/>
				<stop offset="100%" stop-color="#9932cc" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>Team Leader</p>
	</a>
	</div>
	</center>
	<center>
	  <div className='container-rlog'>
	  <a href="./loginmember" class="btnsr">
	  <svg width="277" height="62">
		<defs>
			<linearGradient id="grad1">
				<stop offset="0%" stop-color="#9932cc"/>
				<stop offset="100%" stop-color="#9932cc" />
			</linearGradient>
		</defs>
		 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
	  </svg>
	 
		<p>Team Member</p>
	</a>
	</div>
	</center>
      </form>
	  </div>
	  </center>
	  </div>
  )
}


export default Loginfrist