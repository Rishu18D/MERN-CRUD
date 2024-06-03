import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import "./add.css";

const Add = () => {
  const initialUserState = {
    name: "",
    course: "",
    college: "",
    address: ""
  };

  const [user, setUser] = useState(initialUserState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    return user.name && user.course && user.college && user.address;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("All fields are required", { position: "top-right" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:9000/api/create", user);
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error: ${error.response.data.error}`, { position: "top-right" });
      } else {
        toast.error("Failed to add user", { position: "top-right" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            onChange={inputHandler} 
            id="name" 
            name="name" 
            autoComplete='off' 
            placeholder='Name' 
            value={user.name}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="course">Course</label>
          <input 
            type="text" 
            onChange={inputHandler} 
            id="course" 
            name="course" 
            autoComplete='off' 
            placeholder='Course' 
            value={user.course}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="college">College</label>
          <input 
            type="text" 
            onChange={inputHandler} 
            id="college" 
            name="college" 
            autoComplete='off' 
            placeholder='College' 
            value={user.college}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            onChange={inputHandler} 
            id="address" 
            name="address" 
            autoComplete='off' 
            placeholder='Address' 
            value={user.address}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
