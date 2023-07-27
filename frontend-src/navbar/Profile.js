import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "./profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";
import { BsFillPersonFill, BsClockHistory } from "react-icons/bs";

import axios from "axios";

import Cookies from "js-cookie";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Profile = () => {
//   const [data, setData] = useState([]);
  const nav = useNavigate();
  const gooutside=()=>{
    nav('/');
  }
  
//   useEffect(() => {
    
      
//       axios
//         .get(`http://127.0.0.1:2020/showGuest/${Cookies.get("email")}`)
//         .then((response) => {
//           setData(response.data[0]);
//           // console.log(response.data[0]);
//         })
//         .catch((error) => {
//           console.log(error);
//         });

   
//   }, []);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
      <Navbar/>

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                <Avatar
                 alt={Cookies.get('email').charAt(0).toUpperCase()}
                 src="https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png"
                  sx={{
                    width: 100,
                    height: 100,
                    marginTop: "40px",
                    backgroundColor: "#ADD8E6",
                    color: "#000055",
                  }}
                />
              </div>
              
             <div className="prof_info"><center>
                Hi User,<br/>
                Glad to Welcome You in!<br/>
                <p style={{color:"blue"}}>{Cookies.get('email')}</p>
                <br/>
                <br/>
                <Link to="/"><Button class="logout-btn" onclick={gooutside}>
      <i class="fas fa-sign-out-alt"></i> Logout
    </Button></Link>
             </center>

             </div>
              {/* <div className="cont">
                <div className="i">
                  <BsFillPersonFill />
                  <div
                    style={{ marginLeft: "30px" }}
                    onClick={handleShowProfile}
                  >
                    Personal Information
                  </div>
                </div>
                <div
                  className="i"
                  //  onClick={handleview}
                >
                  <BsClockHistory />
                  <div
                    style={{ marginLeft: "30px" }}
                    onClick={handleShowHistory}
                  >
                    Booking History
                  </div>
                </div> */}
                {/* <div className="i">
                  <FaAmazonPay />
                  <div style={{ marginLeft: "30px" }}>Payment</div>
                </div>
                <div className="i">
                  <TbJewishStarFilled />
                  <div style={{ marginLeft: "30px" }}>Preferences</div>
                </div> */}
              {/* </div> */}
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;