import React, { useState } from "react";

export default function Alert() {
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setAlertOpen(true)}
        className="bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        Show Alert
      </button>

      {alertOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h2 className="text-lg font-bold text-gray-800">⚡ Custom Alert</h2>
            <p className="text-gray-600 mt-2">Ye alert aapke CSS ke hisaab se hai 🎨</p>
            <button
              onClick={() => setAlertOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}