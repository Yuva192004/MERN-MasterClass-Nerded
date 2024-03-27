import React from 'react';

const UserList = ({ users, onDelete, onEdit, setEditingUser }) => {
  const handleDelete = (user) => {
    onDelete(user); // Call onDelete function with the user object
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
