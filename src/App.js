import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  const [userName,setUsername]= useState('defaultValue');
  console.log(userName);//we cat use current userName after change
const submitHandler=(e)=>{
  e.preventDefault()
}

const usernameChangeHandler = (e)=>{
  e.preventDefault();
  setUsername(e.currentTarget.value);
}
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler} >
          <div>
            <label htmlFor="username">Username</label>
            <input 
            id='username' 
            type="text" 
            name="username" 
            onChange={usernameChangeHandler}
            value={userName}/>
            
          </div>
          <div>
            <label htmlFor="passwors">Password</label>
            <input id='password' type="text" anme="password" />
          </div>
          <div>
            <input type="submit" value='Login' />
          </div>

        </form>
      </header>
    </div>
  );
}

export default App;
