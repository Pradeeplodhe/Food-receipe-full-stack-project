import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './pages/Alert'
import SignupPage from './pages/SignupPage'

import AllRoutes from './Components/AllRoutes'
import { BrowserRouter } from 'react-router-dom'
// import Navbar from './Components/Navbar'
function App() {
  // const [count, setCount] = useState(0)
const [login, setlogin] = useState(false)
const [sign, setsign] = useState(false)

// const handleSignupLogin=()=>{
//     setlogin(false);
//     setsign(true);
//     console.log("hiii");
// }

  return (
    <>
    {/* {login && <Login handleSignupLogin={handleSignupLogin}/>}
 {     sign && <SignupPage/>} */}
    
   {/* <Alert/> */}
    <BrowserRouter>
     {/* <Navbar/> */}
   <AllRoutes/>
   </BrowserRouter>
    </>
  )
}

export default App
