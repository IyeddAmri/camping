import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    DisplayName: '',
    Email: '',
    ProfilePictureURL: '',
    AuthenticationProvider: '',
    RegistrationDate: '',
    LastLogin: '',
  });
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState('');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user/getall');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/user/add', newUser);
      fetchUsers();
      setNewUser({
        DisplayName: '',
        Email: '',
        ProfilePictureURL: '',
        AuthenticationProvider: '',
        RegistrationDate: '',
        LastLogin: '',
      });
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdate = async (userID) => {
    const userToUpdate = users.find(user => user.UserID === userID);
    setSelectedUser(userToUpdate);
    setShowUpdatePopup(true);
    setSelectedUserID(userID);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${selectedUserID}`, selectedUser);
      fetchUsers();
      setShowUpdatePopup(false);
      setSelectedUser({});
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (userID) => {
    setShowDeletePopup(true);
    setSelectedUserID(userID);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8080/user/${selectedUserID}`);
      fetchUsers();
      setShowDeletePopup(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCancel = () => {
    setShowAddPopup(false);
    setShowUpdatePopup(false);
    setShowDeletePopup(false);
    setSelectedUser({});
  };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => setShowAddPopup(true)}>Add User</button>
      {showAddPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="DisplayName" value={newUser.DisplayName} onChange={handleInputChange} placeholder="DisplayName" required className="popup-input" />
              <input type="email" name="Email" value={newUser.Email} onChange={handleInputChange} placeholder="Email" required className="popup-input" />
              <input type="text" name="ProfilePictureURL" value={newUser.ProfilePictureURL} onChange={handleInputChange} placeholder="ProfilePictureURL" required className="popup-input" />
              <input type="number" name="AuthenticationProvider" value={newUser.AuthenticationProvider} onChange={handleInputChange} placeholder="AuthenticationProvider" required className="popup-input" />
              <input type="number" name="RegistrationDate" value={newUser.RegistrationDate} onChange={handleInputChange} placeholder="RegistrationDate" required className="popup-input" />
              <input type="number" name="LastLogin" value={newUser.LastLogin} onChange={handleInputChange} placeholder="LastLogin" required className="popup-input" />
              <div className="popup-buttons">
                <button type="submit">Add User</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {users.map(user => (
        <div key={user.UserID} className="user">
          <div className="user-details">
            <h3>{user.DisplayName}</h3>
            <p>{user.Email}</p>
            <p>ProfilePictureURL: {user.ProfilePictureURL}</p>
            <p>AuthenticationProvider: {user.AuthenticationProvider}</p>
            <p>RegistrationDate: {user.RegistrationDate}</p>
            <p>LastLogin: {user.LastLogin}</p>
          </div>
          <div>
            <button onClick={() => handleUpdate(user.UserID)}>Update</button>
            <button onClick={() => handleDelete(user.UserID)}>Delete</button>
          </div>
        </div>
      ))}
      {showUpdatePopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update User</h2>
            <form onSubmit={handleUpdateSubmit}>
              <input type="text" name="DisplayName" value={selectedUser.DisplayName} onChange={handleInputChange} placeholder="DisplayName" required className="popup-input" />
              <input type="email" name="Email" value={selectedUser.Email} onChange={handleInputChange} placeholder="Email" required className="popup-input" />
              <input type="text" name="ProfilePictureURL" value={selectedUser.ProfilePictureURL} onChange={handleInputChange} placeholder="ProfilePictureURL" required className="popup-input" />
              <input type="number" name="AuthenticationProvider" value={selectedUser.AuthenticationProvider} onChange={handleInputChange} placeholder="AuthenticationProvider" required className="popup-input" />
              <input type="number" name="RegistrationDate" value={selectedUser.RegistrationDate} onChange={handleInputChange} placeholder="RegistrationDate" required className="popup-input" />
              <input type="number" name="LastLogin" value={selectedUser.LastLogin} onChange={handleInputChange} placeholder="LastLogin" required className="popup-input" />
              <div className="popup-buttons">
                <button type="submit">Update User</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeletePopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Delete User</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="popup-buttons">
              <button onClick={handleDeleteConfirm}>Delete</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
