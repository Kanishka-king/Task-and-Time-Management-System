import React, {  useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from './Form'
import './loginpg.css' 
const SignUp = () => {   
  const[values,setValues]=useState({
    id:"",
    username:"",
    email:"",
    phoneno:"",
    birthday:"",
    password:"",
    confirmPassword:"",
    country:""
  });
 
  const inputs=[
   
  {
    id:1,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be valid Email address!",
    label:"Email",
    required:true
  },
  
  
  
  {
    id:2,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special Character!", 
    label:"Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required:true
  },
  
  ]
const handleSubmit=(e)=>{
  e.preventDefault();
 

  axios.post('http://127.0.0.1:8080/addPass', values);

  
  
};
const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value});
};
console.log(values);
  return (<div className='wrapp1'>
    <div className='app1'>
        <form onSubmit={handleSubmit} className='for1'><div className='reg'>
        <h1 className='h11'>Registeration Form</h1>
          {
            inputs.map((input)=>(

              <Form
              key={input.id} {...input} 
              value={values[input.name]} 
              onChange={onChange} />
            ))
          }
            <h6 className="h111">Already Have An Account? <Link to="/login" className='loglin'>Login</Link></h6>
          <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
        
            <Link to="/home"><button className='signbttn1'>Submit</button></Link>
            
            </div>
        </form>
    </div>
    </div>
  )
}

export default SignUp


// import React ,{useState}from"react"
// import { Link } from "react-router-dom";
// import './login.css' 
// import{useDispatch} from "react-redux"
// import { loginUser } from "../Store/UserSlice";

// const Login=()=>{

// //  
//   const handleLoginEvent=(e)=>{
//     e.preventDefult();
//     // dispatch(login({
//     //      email:email,
//     //     password:password,
//     //      loggedIn:true,
//     //   }))
//     // dispatch(loginUser(userCredential))
//   };

//   return (
//     <div className="app1">
//       <form className='for1'><div className='reg1' onSubmit={handleLoginEvent}>
//         <h1>Login Here</h1>
       
//         <input className='in2' type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
//      /><br/>
//         <input type="password" className='in2' required placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}
//         />
//         <br/>
//         <h5 className="h1">Create a Account? <Link to="/">Sign Up</Link></h5>
//             <Link to="/home"><button className='signbttn'>Submit</button></Link>
            
//         </div>
//       </form>
//     </div>
//   )
// }
// export default Login