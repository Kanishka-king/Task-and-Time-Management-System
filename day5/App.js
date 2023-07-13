import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
import Project from "./Projects/Project.jsx"
import Dashboard from "./Dashboard/Dashboard"
import Contact from './contact/Contact';
import AddProject from './Dashboard/AddProject';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route  path="/" element={<SignUp/>}></Route>
    <Route  className='App' path="/login" element={<Login/>}></Route>
    <Route   path="/home" element={<Home/>}></Route>
    <Route   path="/pro" element={<Project/>}></Route>
    <Route   path="/dash" element={<Dashboard/>}></Route>
    <Route   path="/cont" element={<Contact/>}></Route>
    <Route   path="/create" element={<AddProject/>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;