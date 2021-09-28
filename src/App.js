import {useEffect, useState} from 'react'
import Header from './components/Header'
import LoginForm  from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import useToken from './components/useToken'


function App() {
 
 
  const [users, setTasks]= useState([])

  useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer= await fetchTasks()
    setTasks(tasksFromServer)
  }
  
  getTasks()
  },[])

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
  }
 
 
  //login 
  const { token, setToken } = useToken();


  return (
    <Router>
    <div className="App">
     <Header/>

     <Route path='/' exact render={(props) =>(
<>


{!token ?(
     <LoginForm  setToken ={setToken}/>
      ) :(
<Dashboard/>
      )}

</>


     )} />
     
     <Route path='/register' exact render={(props) =>(
<>

<RegistrationForm onAdd={registration}/>

</>


     )} />
  
     <Footer/>
    </div>
 </Router>
  );
  }
export default App;
