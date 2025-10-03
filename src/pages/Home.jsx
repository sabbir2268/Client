import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./../components/CoffeeCard";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <div>
      <div className="p-6">
        <div className="text-center mb-8">
          <h3 className="text-sm text-amber-600">---Sip & Savor---</h3>
          <h1 className="text-3xl font-bold">Our Popular Products</h1>
          <Link
            to="/addCoffee"
            className="bg-amber-700 p-2 btn btn-xs text-white"
          >
            Add Coffee
          </Link>
        </div>

        {/* Grid container */}
        <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-amber-100 p-6 rounded-lg">
          {coffees.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
