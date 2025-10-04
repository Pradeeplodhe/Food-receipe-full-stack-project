import React from "react";

const individualReceipe = ({ 
  image, 
  name, 
  timing, 
  description, 
//   onDelete, 
//   onAdd, 
//   onBack 
}) => {

const handleDelete = () => {
    alert("Deleted!");
  };

  const handleAdd = () => {
    alert("Added to cart!");
  };

  const handleBack = () => {
    alert("Going back to Home Page!");
  };



  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-8">
      {/* Food Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover" 
      />

      {/* Food Details */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-500 mb-2">⏰ {timing}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex justify-between gap-2">
          <button 
            onClick={handleDelete} 
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Delete Item
          </button>

          <button 
            onClick={handleAdd} 
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Add Item
          </button>

          <button 
            onClick={handleBack} 
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default individualReceipe;