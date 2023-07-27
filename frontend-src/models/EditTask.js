import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [description, setDescription] = useState('');
  const [taskAssign, setTaskAssign] = useState('');
  const [projectId, setProjectId] = useState(0);
const[projectName,setProjectName]=useState('');
const [time, setTime] = useState('');
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

  useEffect(() => {
    setProjectName(taskObj.projectname);
    setDescription(taskObj.description);
    setTaskAssign(taskObj.assignedto);
    setProjectId(taskObj.projectid);
    setTime(taskObj.time);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['projectname'] = projectName;
    tempObj['description'] = description;
    tempObj['assignedto'] = taskAssign;
    tempObj['projectid'] = projectId;
    tempObj['time']=time;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={handleChange}
            name="taskName"
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
        <div className="form-group">
          <label>Assign To</label>
          <input
            type="text"
            className="form-control"
            value={taskAssign}
            onChange={handleChange}
            name="taskAssign"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask