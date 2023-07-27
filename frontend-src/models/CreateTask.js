import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
const CreateTaskPopup = ({ modal, toggle, save }) => {
  
  const [description, setDescription] = useState('');
  const [taskAssign, setTaskAssign] = useState('');
  const [projectId, setProjectId] = useState(0);
  const [time, setTime] = useState('');
const[projectName,setProjectName]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;

     if (name === 'description') {
      setDescription(value);
    } else if (name === 'taskAssign') {
      setTaskAssign(value);
    }
    else if(name==='projectId'){
      setProjectId(value);
    }
    else if(name==='projectName'){
      setProjectName(value);
    }
    else if(name==='time'){
      setTime(value);
    }
  };
  let s=0;

  const handleSave = async (e) => {
    e.preventDefault();
  
    let taskObj = {
      description: description,
      time:time,
      assignedto: taskAssign,
      projectid: +projectId,
      projectname:projectName
    };
  s++;
     save(taskObj);
    const token = localStorage.getItem('token');
  const myArr=time.split(" ");
  if(s==1){
    let a=parseInt(myArr[0]);
    Cookies.set('date',a);
    let b=parseInt(myArr[1]);
    Cookies.set('month',b);
    let c=parseInt(myArr[2]);
    Cookies.set('year',c);
    Cookies.set('proname',projectName);
    console.log(c);

  }
  else if(s==2){
    let a=parseInt(myArr[0]);
    Cookies.set('date1',a);
    let b=parseInt(myArr[1]);
    Cookies.set('month1',b);
    let c=parseInt(myArr[2]);
    Cookies.set('year1',c);
    Cookies.set('proname1',projectName);
    console.log(c);
  }
  else if(s==3){
    let a=parseInt(myArr[0]);
    Cookies.set('date2',a);
    let b=parseInt(myArr[1]);
    Cookies.set('month2',b);
    let c=parseInt(myArr[2]);
    Cookies.set('year2',c);
    Cookies.set('proname2',projectName);
    console.log(c);
  }
 else if(s==4){
  let a=parseInt(myArr[0]);
  Cookies.set('date3',a);
  let b=parseInt(myArr[1]);
  Cookies.set('month3',b);
  let c=parseInt(myArr[2]);
  Cookies.set('year3',c);
  Cookies.set('proname3',projectName);
  console.log(c);
 }
    await axios.post('http://localhost:8181/api/pro/task', taskObj, {
      headers: {
        "Authorization": `Bearer ${token}`, 
      },
    })
    .then((response) => {
      
      console.log('Task created successfully:', response.data);
      
      toggle();
    })
    .catch((error) => {
      
      console.error('Error creating task:', error);
    });
   
   
  };
  

  return (
    <Modal isOpen={modal} toggle={toggle} >
     
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label> Name of Task</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={handleChange}
            name="projectName"
          />
        </div>
        <div className="form-group">
          <label>Requirement</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Time Limit</label>
          <input
            type="text"
            className="form-control"
            value={time}
            onChange={handleChange}
            name="time"
          />
        </div>
      
          <label>Assign To</label>
          <input
            type="text"
            className="form-control"
            value={taskAssign}
            onChange={handleChange}
            name="taskAssign"
          />
          <div className="form-group">
          <label>Project Id</label>
          <input
            type="number"
            className="form-control"
            value={projectId}
            onChange={handleChange}
            name="projectId"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
      
    </Modal>
  );
};

export default CreateTaskPopup;
