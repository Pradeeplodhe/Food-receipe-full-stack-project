// import React, { useState } from "react";

// export default function Addyourrceipe() {
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     ingredients: "",
//     time: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Recipe Added:", formData);
//     alert("🎉 Recipe Added Successfully!");
//     setFormData({ name: "", image: "", ingredients: "", time: "", description: "" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 p-6">
//       <div className="w-full max-w-lg bg-black rounded-2xl shadow-2xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
//           🍲 Add Your Recipe
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Recipe Name */}
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Recipe Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter recipe name"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Recipe Image (URL)
//             </label>
//             <input
//               type="url"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="https://example.com/recipe.jpg"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           {/* Ingredients */}
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Ingredients
//             </label>
//             <textarea
//               name="ingredients"
//               value={formData.ingredients}
//               onChange={handleChange}
//               placeholder="List ingredients separated by commas"
//               rows="3"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           {/* Cooking Time */}
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Cooking Time (in minutes)
//             </label>
//             <input
//               type="number"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               placeholder="e.g. 30"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Recipe Steps / Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Write step by step recipe instructions..."
//               rows="4"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105"
//           >
//             ➕ Add Recipe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export default function Addyourrceipe() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    ingredients: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Added:", formData);
    alert("🎉 Recipe Added Successfully!");
    setFormData({ name: "", image: "", ingredients: "", time: "", description: "" });
 


             axios
            .post("http://localhost:5000/api/dises", formData)
            .then((response) => {
               console.log("Post created successfully!");
            })
            .catch((err) => {
              console.log("Error creating post"+ err);
            });

 };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with food image + animated gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 via-red-500/50 to-yellow-500/70 animate-gradient"></div>

      {/* Form Card */}
      <div className="relative w-full max-w-lg backdrop-blur-xl bg-/80 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text- drop-shadow-lg">
          🍽 Add Your Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recipe Name */}
          <div>
            <label className="block text-sm font-bold mb-2 text-">
              Recipe Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter recipe name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-bold mb-2 text-">
              Recipe Image (URL)
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/recipe.jpg"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-bold mb-2 text-black">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="List ingredients separated by commas"
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Cooking Time */}
          <div>
            <label className="block text-sm font-bold mb-2 text-black">
              Cooking Time (minutes)
            </label>
            <input
              type="number"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="e.g. 30"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-black">
              Recipe Steps / Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write step by step recipe instructions..."
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105"
              
          >
            ➕ Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

