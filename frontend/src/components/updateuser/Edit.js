import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../adduser/add.css';
import './Edit.css';

const Edit = () => {
  const [user, setUser] = useState({
    name: '',
    course: '',
    college: '',
    address: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/getone/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data', { position: 'top-right' });
      }
    };

    fetchData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/api/update/${id}`, user);
      toast.success('User updated successfully', { position: 'top-right' });
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user', { position: 'top-right' });
    }
  };

  return (
    <div className="addUser">
      <Link to="/">Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label> 
          <input
            type="text"
            value={user.name}
            onChange={inputChangeHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            value={user.course}
            onChange={inputChangeHandler}
            id="course"
            name="course"
            autoComplete="off"
            placeholder="Course"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="college">College</label>
          <input
            type="text"
            value={user.college}
            onChange={inputChangeHandler}
            id="college"
            name="college"
            autoComplete="off"
            placeholder="College"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={user.address}
            onChange={inputChangeHandler}
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
