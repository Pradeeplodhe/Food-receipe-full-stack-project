  import Login from "../pages/Login";
  import { Link, NavLink } from "react-router-dom";

  import Home from "../pages/Home";
  import Recepi from "../pages/Recepi";
  import PlaceOrder from "../pages/PlaceOrder";
  import Addyourreipe from "../pages/Addyourrceipe";
  import Seeyourreceipe from "../pages/Seeyourreceipe";
   import Profile from "../pages/Profile";
   import { Route,Routes } from "react-router-dom";
 import { BrowserRouter } from "react-router-dom";
 import Footer from "../pages/Footer";
 import AllLoginData from "../pages/AllLoginData";
 import PrivateRoute from "./PrivateRoute";
   export default function AllRoutes(){
    return (
      <div>

  










<nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-6 py-4 shadow-xl">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Logo with Gradient Animation */}
    <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 text-transparent bg-clip-text animate-pulse">
      🍴 FoodRecipe
    </div>

    {/* Links */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-medium items-center">
      <Link 
        to="/" 
        className="relative group transition"
      >
        Home
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link to="/Recepi" className="hover:text-red-400 transition">Recipes</Link>
      <Link to="/Addyourreipe" className="hover:text-red-400 transition">Add Recipe</Link>
      <Link to="/PlaceOrder" className="hover:text-red-400 transition">Order</Link>
      <Link to="/profile" className="hover:text-red-400 transition">Profile</Link>
    </div>

    {/* Login Button with Gradient */}
    <div>
      <Link 
        to="/loginData" 
        className="bg-gradient-to-r from-red-500 to-red-700 px-5 py-2 rounded-lg font-semibold 
                   hover:from-red-600 hover:to-red-800 transition shadow-lg hover:shadow-red-500/50"
      >
        Login
      </Link>
    </div>
  </div>
</nav>

<Routes>
  <Route path="/loginData" element={<AllLoginData/>}/>
 <Route path="/" element={<Home/>}/>
 <Route path="/Recepi" element={
  <PrivateRoute>
  <Recepi/>
  </PrivateRoute>
  }/>
 <Route path="/PlaceOrder" element={
  <PrivateRoute>
  <PlaceOrder/>
  </PrivateRoute>
  }/>
 
 <Route path="/Addyourreipe" element={
  <PrivateRoute>
  <Addyourreipe/>
  </PrivateRoute>
  }/>

<Route path="/Seeyourreceipe" element={
  <PrivateRoute>
  <Seeyourreceipe/>
  </PrivateRoute>
  }/>


<Route path="/Profile" element={
   <PrivateRoute>
 <Profile/>
  </PrivateRoute>
  }/>


</Routes>


<Footer/>

 </div>
    )
  }