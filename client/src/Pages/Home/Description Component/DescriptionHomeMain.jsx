import React from "react";

const DescriptionHomeMain = () => {
  return (
    <div className="w-full h-60 bg-back-light grid grid-cols-2">
      <div>
        <h2>Simplify your meals</h2>
        <h3>
          Our AI Technology easily converts your dietary goals into a daily meal
          plan for any dining hall at UW-Madison
        </h3>
        <button type="button" className="text-center w-36 bg-accent h-16">
          Get Started
        </button>
      </div>
      <div>Imagine an image here or sum</div>
    </div>
  );
};

export default DescriptionHomeMain;
