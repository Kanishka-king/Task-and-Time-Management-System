import React from 'react';
import Navbar from '../navbar/Navbar';
import Todolist from '../Todolist/TodoList';
import './Home.css';
import Footer from '../footer/Footer';

import FeesManagement from '../Dashboard/FeesManagment';
import Navbar1 from '../navbar/Navbar1';
function Home1() {
  return (
    <div>
    <div >
    <Navbar1 />
    </div>
    <div>
   <FeesManagement/>
    </div>
    <Footer/>
    </div>
  );
}

export default Home1;