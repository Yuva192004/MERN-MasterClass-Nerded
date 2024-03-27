// Mock data for users
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];
  
  // Function to fetch all users
  export const fetchUsers = () => {
    return Promise.resolve(users);
  };
  
  // Function to add a new user
  export const addUser = (newUser) => {
    const id = users.length + 1;
    const userWithId = { id, ...newUser };
    users.push(userWithId);
    return Promise.resolve(userWithId);
  };
  
  // Function to edit a user
  export const editUser = (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return Promise.resolve(users[index]);
    }
    return Promise.reject(new Error("User not found"));
  };
  
  // Function to delete a user
  export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    return Promise.resolve();
  };
  