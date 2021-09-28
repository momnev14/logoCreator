import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import axios from 'axios';




const LoginForm = ({setToken}) => {
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user,setUser]=useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, [])

  const handleLogout = () => {
    setUser({});
    setUserName("");
    setPassword("");
    localStorage.clear();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(!username){
  
      alert('Please insert name')
      return 
          }else if(!password){
    
            alert('Please insert password')
            return 
    
          }

          const user = { username, password };
          // send the username and password to the server
          const response = await axios.post(
            "http://localhost:5000/users",
            user
          );
          // set the state of the user
          setUser(response.data)
          // store the user in localStorage
          localStorage.setItem("user", JSON.stringify(response.data))
          console.log(response.data)
  }
  if (user) {
    return (
      <Dashboard onSubmit={handleLogout}/>
    );
  }
    return (
       
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={handleSubmit} >
            <div className="form-group text-left">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input type="text" 
                   className="form-control" 
                   id="username" 
                    aria-describedby="usernameHelp" 
                   placeholder="Enter username" 

                   onChange={({ target }) => setUserName(target.value)}         
       />
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" 
                   className="form-control" 
                   id="password" 
                   placeholder="Password"
                   onChange={({ target }) => setPassword(target.value)}
            />
            </div>
            <div className="form-check">
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                
            >Submit</button>
        </form>
       
        <div className="registerMessage">
            <span>Dont have an account? </span>
            < Link to="/register" >Register</Link> 
        </div>
    </div>
  
    )
    

}

export default LoginForm
