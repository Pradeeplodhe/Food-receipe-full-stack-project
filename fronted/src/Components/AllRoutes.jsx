  import Login from "../pages/login";
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

  










<nav className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white px-6 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          🍴 FoodRecipe
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/Recepi" className="hover:text-yellow-300 transition">Recipes</Link>
          <Link to="/Addyourreipe" className="hover:text-yellow-300 transition">Add Recipe</Link>
          <Link to="/PlaceOrder" className="hover:text-yellow-300 transition">Order</Link>
          <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
        </div>

        {/* Login Button */}
        <div>
          <Link 
            to="/loginData" 
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
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