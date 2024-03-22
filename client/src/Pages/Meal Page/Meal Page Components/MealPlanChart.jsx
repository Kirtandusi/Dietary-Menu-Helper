import React, { useState, useEffect } from "react";

const MealPlanChart = ({ buttonClicked, setButtonClicked }) => {
  // VAR SET IN PLACE FOR USE OF BACKEND IN FUTURE
  const [mealPlan, setMealPlan] = useState([
    {
      name: "Rheta's",
      appetizer: {
        food_title: "Eggs",
        total_calories: 200,
        dietary_restrictions: ["Vegetarian"],
      },
      meal: {
        food_title: "Ham",
        total_calories: 600,
        dietary_restrictions: ["None"],
      },
      dessert: {
        food_title: "Pizza",
        total_calories: 350,
        dietary_restrictions: ["Vegetarian"],
      },
    },
    {
      name: "Gordon's",
      appetizer: {
        food_title: "Large mushrooms",
        total_calories: 200,
        dietary_restrictions: ["Vegetarian"],
      },
      meal: {
        food_title: "pizza",
        total_calories: 600,
        dietary_restrictions: ["None"],
      },
      dessert: {
        food_title: "pizza ",
        total_calories: 350,
        dietary_restrictions: ["Vegetarian"],
      },
    },
    {
      name: "Four Lakes",
      appetizer: {
        food_title: "pizza",
        total_calories: 200,
        dietary_restrictions: ["Vegetarian"],
      },
      meal: {
        food_title: "pizza",
        total_calories: 600,
        dietary_restrictions: ["None"],
      },
      dessert: {
        food_title: "pizza",
        total_calories: 350,
        dietary_restrictions: ["Vegetarian"],
      },
    },
  ]);

  useEffect(() => {
    console.log("ran");
    if (!buttonClicked) return;
    fetch("http://localhost:3001/meal")
      .then((res) => res.json())
      .then((res) => {
        setMealPlan(() => res.mealPlan);
        console.log(res.mealPlan);
      });
    setButtonClicked(false);
  }, [buttonClicked]); // fetch to demo meal once mealPlan is set to true

  return (
    <div>
      <div
        id="box-container"
        className="flex justify-center items-center w-[700px] h-[450px] bg-stone-700"
      >
        {mealPlan.map((meal, index) => {
          return (
            <div className="meal-plan-box">
              <h1 className="text-xl">{meal.name}</h1>
              <ul className="text-left">
                <li>Appetizer: {meal.appetizer.food_title}</li>
                <li>Entree: {meal.meal.food_title}</li>
                <li>Dessert: {meal.dessert.food_title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealPlanChart;
