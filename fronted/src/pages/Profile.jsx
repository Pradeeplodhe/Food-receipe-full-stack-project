import React from "react";
// import { FaUtensils, FaShoppingCart, FaUser, FaHeart, FaSignOutAlt } from "react-icons/fa";
import Login from "./Login";
import { logout } from "../Components/Logout";

// import Logout from "../Components/Logout";
export default function Profile() {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
        // src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="food background"
          className="w-full h-full object-cover opacity-400 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-/60 backdrop-blur-md shadow-xl p-6 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl">
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-8">🍴 FoodZone</h2>
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="flex items-center gap-3 text-black-800 font-bold hover:text-pink-800 transition">
               Profile
            </a>
            <a href="#" className="flex items-center gap-3 text-black-800 font-bold hover:text--600 transition">
            Recipes
            </a>
            <a href="#" className="flex items-center gap-3 text-black-800 font-bold hover:text-orange-600 transition">
              Orders
            </a>
            <a href="#" className="flex items-center gap-3 text-black-700 font-bold hover:text-orange-600 transition">
               Favorites
            </a>
          </nav>
        </div>
        <button className="flex items-center gap-2 text-red-1000 font-bold hover:text-red-700 transition" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Profile Section */}
      <main className="flex-1 relative z-10 p-10 flex justify-center items-center">
        <div className="bg-black/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl w-full transition transform hover:scale-105 hover:shadow-orange-400">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <h1 className="mt-4 text-3xl font-bold text-orange-600">Pradeep Lodhi</h1>
            <p className="text-balck-900">Food Explorer | Home Chef</p>
          </div>

          {/* Bio */}
          <p className="mt-6 text-black-1000 text-center leading-relaxed">
            I love discovering new recipes and exploring food from around the world.  
            From street food to fine dining, every dish tells a story 🍕🍜🥗
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 text-center">
            <div className="p-4 bg-orange-100 rounded-xl shadow hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-orange-600">45</h2>
              <p className="text-black-600">Recipes</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-xl shadow hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-yellow-600">12</h2>
              <p className="text-black-600">Orders</p>
            </div>
            <div className="p-4 bg-pink-100 rounded-xl shadow hover:scale-105 transition">
              <h2 className="text-2xl font-bold text-pink-600">30</h2>
              <p className="text-black-600">Favorites</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-6">
            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300">
              View Recipes
            </button>
            <button className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </main>


















      
    </div>
  );
}