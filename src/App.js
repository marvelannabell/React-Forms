import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  const [values, setValues] = useState({
    username: '',
  password: '',
age:'',
bio:'',
gender: 'm',
userType:'corporate',
tac: false


});
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [userType, setUserType] = useState('corporate')
  const [tac, setTac] = useState(true)
  
  
  
  
  

  //console.log(userName);//we cat use current userName after change

  const submitHandler = (e) => {
    e.preventDefault()
    // let values = Object.fromEntries(new FormData(e.target));
    // console.log("pass", password);
    // console.log("name", userName);
    // console.log("age", age);
    // console.log("gender", gender);
    // console.log("userType",userType);
    console.log(values);
  }
  
  const changeHandler =(e)=>{
    console.log(e.target.name,'-',e.target.value);
    
    setValues(oldState=>({
      ...oldState,
      [e.target.name]:e.target.type =="checkbox"? e.target.checked : e.target.value
    }))
  };

  // const checkboxHandler =(e)=>{
  //   // console.log(e.target.name,'-',e.target.checked);
    
  //   setValues(oldState=>({
  //     ...oldState,
  //     [e.target.name]:e.target.checked
  //   }))
  // }

  // const usernameChangeHandler = (e) => {
  //   e.preventDefault();
  //   changeHandler(e.currentTarget.value);
 
  // }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler} >
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id='username'
              type="text"
              name="username"
              onChange={changeHandler}
              value={values.username} />

          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input id='password' type="password" name="password" value={values.password} onChange={changeHandler}/>
          </div>

          <div>
            <label htmlFor="age">Age: </label>
            <input id='age' type="number" name="age" value={values.age} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="bio">Bio: </label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
          </div>

          <div>
            <label htmlFor="gender" >Gender: </label>
            <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="tac">Terms and Conditions: </label>
            <input type="checkbox" name='tac' id="tac"  onChange={changeHandler}/>
          </div>
          <div>
          <label htmlFor="individual-user-type">Individual: </label>
          <input type="radio" name='userType' value="individual" id="individual-user-type" onChange={changeHandler} checked={values.userType==="individual"}/>
          <label htmlFor="corporate-user-type">Corporate: </label>
          <input type="radio" name='userType' value="corporate" id="corporate-user-type" onChange={changeHandler} checked={values.userType==="corporate"}/>

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
