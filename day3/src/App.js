import React, { useState } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter(user => user.id !== userToDelete.id);
    setUsers(updatedUsers);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="App">
      <h1>User Manager</h1>
      <UserList users={users} onDelete={deleteUser} onEdit={editUser} setEditingUser={setEditingUser} />
      <UserForm onSubmit={addUser} userToEdit={editingUser} />
    </div>
  );
}

export default App;
