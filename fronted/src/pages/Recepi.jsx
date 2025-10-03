
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import ReactJsAlert from "reactjs-alert";
export default function Recipe() {
  const [meals, setMeals] = useState([]);

  const handlesearch=(r)=>{
   
 console.log(r)
//  return( <Alert/>)
  alert(r)
 console.log(alert(r).React)
}
  
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error(err));
  }, []);

  return (
     
    <div className="min-h-screen bg-gray-100 p-6">
       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽 Delicious Recipes
      </h1>
      <label >Serach item here </label>
  <input className="bg-black " type="text" />
     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{"box-shadow:":" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-1500 truncate">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-1000">
                Category: <span className="font-medium">{meal.strCategory}</span>
              </p>
              <p className="text-sm text-gray-900 mb-3">
                Area: <span className="font-medium">{meal.strArea}</span>
              </p>
              <button className="w-full bg-green-500 font-bold text-black py-3 rounded-xl hover:bg-green-900 transition" onClick={()=>handlesearch(meal.strMeal)}>
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}