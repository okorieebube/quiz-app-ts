import React, { useState } from 'react';
import './App.css';
import { User } from './interfaces';



function App() {
  const [user, setUser] = useState<User | null>(null);
  let fetchUser = () => {
    setUser({
      name: "Mitchel",
      age: 23,
      country: "Nigeria",
      admin: false
    })
  }

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={fetchUser}>Click me</button>
      {user && <p>Welcome, {user.name}</p>}
    </>

  );
}

export default App;
