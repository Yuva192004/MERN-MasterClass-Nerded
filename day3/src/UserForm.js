import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, userToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">{userToEdit ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
