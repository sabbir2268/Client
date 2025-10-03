import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData(); // 👈 data comes directly from loader

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-[400px]">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{coffee.name}</h1>
        <p>
          <span className="font-semibold">Chef:</span> {coffee.chef}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {coffee.price} Taka
        </p>
        <p className="mt-2 text-gray-600">{coffee.description}</p>

        {/* Back Button */}
        <Link to="/">
          <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">
            Back to Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
