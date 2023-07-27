import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import {useNavigate} from "react-router-dom"
import { IconContext } from 'react-icons';
import { Avatar } from '@mui/material';
import Cookies from "js-cookie";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
const navigate=useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  const gotoProfile=()=>{
       navigate('/profile');
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link><div className='kkk'><a href="/home" className='custo'>Tick Tick</a></div>
           <div className='but2'>
      
         
            {/* <Link to='/'>   
          <button className='logb'>Logout</button>
          </Link> */}

{/* { !sessionStorage.getItem("isLoggedIn") && (

  <ul>
              

           <Link to='/'>   
          <button className='logb'>Logout</button>
          </Link> 
          <Link to='/signup'>   
          <button className='logb1'>SignUp</button>
          </Link> 
       
          </ul>
            )} */}
            {sessionStorage.getItem("isLoggedIn") && (
               <div onClick={gotoProfile}>
              <Avatar style={{ backgroundColor: "voilet" }}>
              <p
              style={{ justifyContent: "center", marginTop: "15px" }}
              >
              {Cookies.get("email") .charAt(0).toUpperCase()}
              {/* */}
              </p>
              </Avatar>
              <div className="nav_item" style={{ marginLeft: "-8px",color:"white" }}>
              PROFILE
              </div>
              
              {/* <li className="nav_item" onClick={handleLogout}>
              LOGOUT
            </li> */}
            </div> 
            )}
      
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>

            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <p className='p1'>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;