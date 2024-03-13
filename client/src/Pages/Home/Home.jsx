import React from "react";
import { Link } from "react-router-dom";
import HeroHome from "./Home Components/HeroHome";
import DescriptionHomeMain from "./Description Component/DescriptionHomeMain";

console.log("Home.jsx");

const Home = () => {
  return (
    <div className="h-screen w-screen bg-back">
      <HeroHome />
      <DescriptionHomeMain />
      <Link to="/meal-plan-page">
        <button type="button" className="text-center w-[100vw] bg-accent h-36">
          Go to meal plan page Page
        </button>
      </Link>
    </div>
  );
};

export default Home;
