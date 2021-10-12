
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count -1);
  }
  return(
   <div>
     <h1>Count:{count}</h1>
   <button onClick = {increase}>Increase</button>
   <button onClick = {decrease}>Increase</button>
   </div>
  
  )
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h1>External Users</h1>
     
     {
        users.map(user => <User name = {user.name} email = {user.email}></User> )
      }
     
    </div>
  )
}
function User(props) {
  return(
    <div>
      <h4>Name: {props.name}</h4>
      <p>Email : {props.email}</p>
    </div>
  )
}


/* 
const  [count, setCount] = useState(0);
  const handleIncrease = () => {
  const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    setCount(count -1);
  }
 <div>
      <h1>Count: {count} </h1>
      
      <button onClick={handleDecrease}>Decrease</button>
    </div> */
export default App;
