import { useState,useEffect } from "react";
export default function  PlaceOrder(){
  const [foods, setFoods] = useState([]);

  // 👉 Aap apna actual API link yahan lagaiye
  const API_URL = "http://localhost:5000/a/api/dises"; 

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((err) => console.error("Error fetching API:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-100 to-grey-100 p-6  bg-black bg-white-500 shadow-lg shadow-cyan-500/50 ...  "   style={{"box-shadow":" rgba(255, 255, 255, 0.35) 0px 5px 15px"}}
          >
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-700">
        🍲 Food Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  shadow-md   ">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            style={{"box-shadow":  "rgba(247, 247, 247, 0.25) 0px 54px 55px, rgba(255, 250, 250, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(237, 229, 229, 0.09) 0px -3px 5px;"}}
          >
            {/* Food Image */}
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover"
            />

            {/* Food Details */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black-1000 mb-2">
                {food.name}
              </h2>
              <p className="text-sm font-bold text-gray-1000 mb-2">
                <span className="font-bold">Ingredients:</span> {food.ingredient}
              </p>
              <p className="text-sm text-gray-1000 mb-2">
                ⏱ <span className="font-bold">Time:</span> {food.time}
              </p>
              <p className="text-sb  text-gray-1200 line-clamp-3">
                {food.description}
              </p>

              <button className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>


      
    </div>
  );
}