import React, {useState} from 'react'
import {Link} from 'react-router-dom'
const RegistrationForm = ({onAdd}) => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    
    const onSubmit = (e) =>{
  
      e.preventDefault()
  
      if(!username){
  
  alert('Please insert name')
  return 
      }else if(!password){

        alert('Please insert password')
        return 

      }
  
  
  onAdd({username, password})
  setUsername('')
  setPassword('')
  
    }


    return (
        
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={onSubmit}>
                <div className="form-group text-left">
                <label htmlFor="username">Username</label>
                <input type="text" 
                       className="form-control" 
                       id="username" 
                       aria-describedby="userHelp" 
                       placeholder="Enter username"

                       value={username}
                       onChange={(e)=>setUsername(e.target.value)}
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"

                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
            
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
                <div className="registerMessage">
            <span> Have an account? </span>
            < Link to="/login" >Login</Link> 
        </div>
            </form>
        </div>
      
    )
}

export default RegistrationForm
