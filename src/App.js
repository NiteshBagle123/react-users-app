import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [ enteredUsers, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge}]
    });
  }
  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={enteredUsers}/>
    </div>
  );
}

export default App;
