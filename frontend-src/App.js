import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
// import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
import Project from "./Projects/Project.jsx"
// import Dashboard from "./Dashboard/Dashboard"
import Contact from './contact/Contact';
// import AddProject from './Dashboard/AddProject';
import { Calender } from './Calender/Calender';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
import Chatting from './chat/Chatting'
import Logins from './Logins';
import Loginfrist from './login/Loginfrist';
import Loginsadmin from './Loginsadmin';
import Loginsleader from './Loginsleader';
import Loginsmember from './Loginsmember';
import FeesManagement from './Dashboard/FeesManagment';
import Profile from './navbar/Profile';
import Feedback from './feedback/Feedback';
import Home1 from './homepage/Home1';

// import cal from './Calender/cal';
// import ListEmployeeComponent from './Dashboard/ListEmployeeComponenet'
// import AddEmployeeComponent from './Dashboard/AddEmployeeComponent'
function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Loginfrist/>}></Route>
  
    {/* <Route path="/emp" element={<ListEmployeeComponent />} /> */}
          {/* <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} /> */}
    <Route path="/loginadmin" element={<Loginsadmin/>}></Route>
    <Route path="/loginleader" element={<Loginsleader/>}></Route>
    <Route path="/loginmember" element={<Loginsmember/>}></Route>
    <Route  path="/signup" element={<SignUp/>}></Route>
    <Route  className='App' path="/login" element={<Logins/>}></Route>
    <Route   path="/home" element={<Home/>}></Route>
    <Route   path="/home1" element={<Home1/>}></Route>
    <Route   path="/pro" element={<Project/>}></Route>
    {/* <Route path="/cal" element={<cal/>}></Route> */}
    
    {/* <Route   path="/dash" element={<Dashboard/>}></Route> */}
    <Route   path="/cont" element={<Contact/>}></Route>
    {/* <Route   path="/create" element={<AddProject/>}></Route> */}
    <Route   path="/cal" element={<Calender/>}></Route>
    <Route   path="/chat" element={<Chatting/>}></Route>
    <Route   path="/fee" element={<FeesManagement/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="backback" element={<Feedback/>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;