
import { useState, useEffect } from "react";

export default function PlaceOrder() {
  const [foods, setFoods] = useState([]);

  const API_URL = "http://localhost:5000/a/api/dises";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error("Error fetching API:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-red-500 tracking-wide">
        🍲 Food Recipes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 
                       rounded-2xl overflow-hidden shadow-lg hover:scale-105 
                       transition duration-300"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-white mb-2">{food.name}</h2>
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-bold">Ingredients:</span> {food.ingredient}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                ⏱ <span className="font-bold">Time:</span> {food.time}
              </p>
              <p className="text-sm text-gray-200 line-clamp-3">{food.description}</p>
              <button className="mt-4 w-full bg-red-600 text-white px-4 py-2 
                                 rounded-lg hover:bg-red-700 transition shadow-md">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
