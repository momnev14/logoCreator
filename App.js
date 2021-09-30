import {useEffect, useState} from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import axios from 'axios';

function App() {
 
  const [user, setUser] = useState()
  const [users, setTasks]= useState([])

  useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer= await fetchTasks()
    setTasks(tasksFromServer)
    
  }
  
  getTasks()
  },[])
 
//Fetch users
  const fetchTasks= async ()=>{

    const res =await fetch ('http://localhost:5000/users')
  
    const data = await res.json()
  
    return data
  }



  //register

const registration = async (Username)=>{

  const res = await fetch('http://localhost:5000/users',{
method: "POST",
headers: {
  'Content-type':'application/json'

},
body: JSON.stringify(Username)
  })
  const data = await res.json()


  
   setTasks([...users, data])
 return alert ("Successful!")
 
  }
 
 
  //login 
  const login = async (user)=>{
    const response = await axios.post(
      "http://localhost:5000/users",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
  }

  return (
    <Router>
   <div className="App">
     <Header/>

  
     
   

<Route path='/' exact render={(props) =>(
<>

<RegistrationForm onAdd={registration}/>

</>
     )} />
     

{(user) ?(
     <Dashboard/>
      ) :(
<Route path='/login' exact render={(props) =>( <LoginForm onLog={login}/> )} />
      )}


  
 
     <Footer/>
    </div> 
 </Router>
  );
  }
export default App;
