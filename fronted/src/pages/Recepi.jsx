





import React, { useEffect, useState } from "react";

export default function Recipe() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState(""); // 🔍 search state

  const handlesearch = (r) => {
    alert(r);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error(err));
  }, []);

  // 🔍 filter meals according to search
  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400  drop-shadow-lg">
        🍽 Delicious Recipes
      </h1>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10 justify-center">
        <label className="text-lg font-semibold text-gray-200 tracking-wide">
          Search item here
        </label>

        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            🔍
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-white/10 text-white placeholder-gray-400 rounded-2xl 
                       shadow-lg backdrop-blur-md border border-white/20
                       focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type recipe name..."
          />
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMeals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       rounded-3xl shadow-xl overflow-hidden hover:scale-105 
                       hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-white mb-2 truncate">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-300 mb-1">
                Category:{" "}
                <span className="font-medium text-green-400">
                  {meal.strCategory}
                </span>
              </p>
              <p className="text-sm text-gray-300 mb-3">
                Area:{" "}
                <span className="font-medium text-teal-400">{meal.strArea}</span>
              </p>
              <button
                className="w-full bg-gradient-to-r from-red-600 to-yellow-400 text-black font-bold py-3 
                           rounded-xl shadow-md hover:scale-105 active:scale-95 
                           transition-all duration-300"
                onClick={() => handlesearch(meal.strMeal)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from "react";

// export default function Recipe() {
//   const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((res) => res.json())
//       .then((data) => setMeals(data.meals || []))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-600 p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400 tracking-wide drop-shadow-md">
//         🍽 Delicious Recipes
//       </h1>

//       {/* Search Bar */}
//       <div className="flex flex-col md:flex-row items-center gap-4 mb-12 justify-center">
//         <div className="relative w-full md:w-96">
//           <span className="absolute inset-y-0 left-3 flex items-center text-gray-300">
//             🔍
//           </span>
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search recipes..."
//             className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 
//                        text-white placeholder-gray-300 rounded-xl shadow-lg 
//                        focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
//           />
//         </div>
//       </div>

//       {/* Meals Grid */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredMeals.map((meal) => (
//           <div
//             key={meal.idMeal}
//             className="bg-white/10 backdrop-blur-lg border border-white/10 
//                        rounded-2xl shadow-lg overflow-hidden hover:scale-105 
//                        transition duration-300"
//           >
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h2 className="text-xl font-bold text-yellow-300 truncate mb-2">
//                 {meal.strMeal}
//               </h2>
//               <p className="text-sm text-gray-200">
//                 Category: <span className="font-medium">{meal.strCategory}</span>
//               </p>
//               <p className="text-sm text-gray-300 mb-3">
//                 Area: <span className="font-medium">{meal.strArea}</span>
//               </p>
//               <button
//                 className="w-full bg-yellow-400 font-bold text-blue-900 py-3 rounded-xl 
//                            hover:bg-yellow-300 transition duration-300 shadow-md"
//               >
//                 View Recipe
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }















