import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap max-w-[600px]">
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              All
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Burger
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Pizza
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Salad
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              $
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              $$
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              $$$
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div>
        {foods.map((item, index) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>
                <span>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
