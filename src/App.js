import logo from './logo.svg';
import './App.css';

const submitHandler=(e)=>{
  e.preventDefault()
  const formData=new FormData(e.currentTarget)
  const{username,password}=Object.fromEntries(formData);
  console.log(username);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler} >
          <div>
            <label htmlFor="username">Username</label>
            <input id='username' type="text" name="username"/>
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
