import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fees.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const FeesManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    projectid: '',
    requirement: '',
    budget: '',
    status: '',
  });
  const [editIndex, setEditIndex] = useState(-1);
  const token = localStorage.getItem('token');

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setStudents(prevStudents => {
      const updatedStudents = [...prevStudents];
      updatedStudents[index][name] = value;
      return updatedStudents;
    });
  };

  const handleAddStudent = () => {
    if (
      newStudent.name.trim() !== '' &&
      newStudent.projectid.trim() !== '' &&
      newStudent.requirement.trim() !== '' &&
      newStudent.budget.trim() !== '' &&
      newStudent.status.trim() !== ''
    ) {
      axios
        .post('http://localhost:8181/post', newStudent, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          // Assuming the backend returns the updated list of students after successful addition
          setStudents([...students, response.data]);
          setNewStudent({
            name: '',
            projectid: '',
            requirement: '',
            budget: '',
            status: '',
          });
        })
        .catch(error => console.error('Error adding student:', error));
    }
  };

  const handleUpdateStudent = index => {
    const updatedStudent = students[index];
    if (
      updatedStudent.name.trim() !== '' &&
      updatedStudent.requirement.trim() !== ''
    ) {
      axios
        .put('http://localhost:8181/UpdateDetails', updatedStudent, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          setStudents(prevStudents => {
            const updatedStudents = [...prevStudents];
            updatedStudents[index] = response.data;
            return updatedStudents;
          });
          setEditIndex(-1);
        })
        .catch(error => console.error('Error updating student:', error));
    }
  };

  const handleEnableEdit = index => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
  };

  const handleDeleteStudent = index => {
    const studentToDelete = students[index];
    axios
      .delete(`http://localhost:8181/Delete/${studentToDelete.name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setStudents(prevStudents => {
          const updatedStudents = [...prevStudents];
          updatedStudents.splice(index, 1);
          return updatedStudents;
        });
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8181/showDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='feed'>
        <h2 className='myse'>Handle Projects</h2>
        <div className='feel'>
          <input
            type='text'
            className='inp_st'
            name='name'
            value={newStudent.name}
            onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
            placeholder='Kind of project'
          />
          <br />
          <input
            type='text'
            name='projectid'
            className='inp_st'
            value={newStudent.projectid}
            onChange={e => setNewStudent({ ...newStudent, projectid: e.target.value })}
            placeholder='Project ID'
          />
          <br />
          <input
            type='text'
            name='requirement'
            className='inp_st'
            value={newStudent.requirement}
            onChange={e => setNewStudent({ ...newStudent, requirement: e.target.value })}
            placeholder='Requirement'
          />
          <br />
          <input
            type='text'
            name='budget'
            value={newStudent.budget}
            className='inp_st'
            onChange={e => setNewStudent({ ...newStudent, budget: e.target.value })}
            placeholder='Budget'
          />
          <br />
          <input
            type='text'
            name='status'
            value={newStudent.status}
            className='inp_st'
            onChange={e => setNewStudent({ ...newStudent, status: e.target.value })}
            placeholder='Status'
          />
          <br />
          {editIndex === -1 ? (
            <button className='loo' onClick={handleAddStudent}>
              Add Project
            </button>
          ) : (
            <div>
              <button className='loo' onClick={() => handleUpdateStudent(editIndex)}>
                Save
              </button>
              <button className='loo' onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className='ter'>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Project ID</th>
                <th>Requirement</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        name='name'
                       
                        value={students[index].name}
                        onChange={e => handleChange(e, index)}
                      />
                    ) : (
                      student.name
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        name='projectid'
                     
                        value={students[index].projectid}
                        onChange={e => handleChange(e, index)}
                      />
                    ) : (
                      student.projectid
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        name='requirement'
                  
                        value={students[index].requirement}
                        onChange={e => handleChange(e, index)}
                      />
                    ) : (
                      student.requirement
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        name='budget'
                    
                        value={students[index].budget}
                        onChange={e => handleChange(e, index)}
                      />
                    ) : (
                      student.budget
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        name='status'
                      
                        value={students[index].status}
                        onChange={e => handleChange(e, index)}
                      />
                    ) : (
                      student.status
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button className='loo' onClick={() => handleUpdateStudent(index)}>Save</button>
                        <button className='loo' onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (        <div className='delq'>
                      <button className='loo'onClick={() => handleEnableEdit(index)}>Update</button>
            
                    <button className='loo1'onClick={() => handleDeleteStudent(index)}>Delete</button></div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FeesManagement;
