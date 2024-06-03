import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:9000/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success("User deleted successfully", { position: 'top-right' });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user", { position: 'top-right' });
    }
  };

  return (
    <div className='userTable'>
      <Link to="/add" className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>College</th> {/* Corrected spelling of "College" */}
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td> {/* Adjusted to display the full name */}
              <td>{user.course}</td>
              <td>{user.college}</td> {/* Adjusted to display the college */}
              <td>{user.address}</td> {/* Adjusted to display the address */}
              <td className='actionButtons'>
                <button onClick={() => deleteUser(user._id)}>
                  <i className="fa-solid fa-trash"></i>Delete
                </button>
                <Link to={`/edit/${user._id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
