// src/components/FoodSignupPage.jsx
import { useState } from "react";
// import { FaUser, FaEnvelope, FaLock, FaUtensils } from "react-icons/fa";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup:", formData);



 fetch("http://localhost:5000/info/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log("error is     " +err))


            console.log("data regiter succfully" ,formData)

             console.log("data userpassword" ,formData.confirmPassword)




  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')" }}>
      <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          {/* <FaUtensils className="text-green-600 text-4xl mr-2" /> */}
          <h1 className="text-3xl font-extrabold text-green-600">Join Foodie</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              {/* <FaUser className="text-gray-500 mr-2" /> */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full py-3 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              {/* <FaEnvelope className="text-gray-500 mr-2" /> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full py-3 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              {/* <FaLock className="text-gray-500 mr-2" /> */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full py-3 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              {/* <FaLock className="text-gray-500 mr-2" /> */}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full py-3 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            🍔 Sign Up & Start Ordering
          </button>
        </form>

        {/* Extra */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}