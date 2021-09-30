import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function LoginForm({onLog}) {
   
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit =  e => {
    
    e.preventDefault()
  
    if(!username){

alert('Please insert name')
return 
    }else if(!password){

      alert('Please insert password')
      return 

    }
onLog({username,password})
setUsername('')
setPassword('')

  };
  
   
    return (
      
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
 <form onSubmit={handleSubmit}>
        <div className="form-group text-left">
        <label htmlFor="exampleInputUsername1">Username</label>
        <input type="text" 
               className="form-control" 
               id="username" 
                aria-describedby="usernameHelp" 
               placeholder="Enter username" 
             value={username}
             onChange={({ target }) => setUsername(target.value)}
   />
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" 
               className="form-control" 
               id="password" 
               placeholder="Password"
               value ={password}
               onChange={({ target }) => setPassword(target.value)}  
        />
        </div>
        <div className="form-check">
        </div>
        <button 
            type="submit" 
            className="btn btn-primary"
            
        >Submit</button>

   
    <div className="registerMessage">
        <span>Dont have an account? </span>
        < Link to="/" >Register</Link> 
    </div>
    </form>
</div>
    )
}

export default LoginForm
