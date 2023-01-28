import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[550px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[550px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500 ">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[550px] object-cover"
          src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
