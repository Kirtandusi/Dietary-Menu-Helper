import React, { useState, useEffect } from "react";

const MealPlanChart = () => {
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
    fetch("http://localhost:3001/meal")
      .then((res) => res.json())
      .then((res) => {
        setMealPlan(() => res.mealPlan);
        console.log(res.mealPlan);
      });
  }, []);

  return (
    <div>
      <div
        id="box-container"
        className="flex justify-center items-center w-[700px] h-[450px] bg-stone-700"
      >
        <div className="meal-plan-box">
          <h1 className="text-xl">{mealPlan[0].name}</h1>
          <ul className="text-left">
            <li>Appetizer: {mealPlan[0].appetizer.food_title}</li>
            <li>Entree: {mealPlan[0].meal.food_title}</li>
            <li>Dessert: {mealPlan[0].dessert.food_title}</li>
          </ul>
        </div>
        <div className="meal-plan-box">
          <h1 className="text-xl">{mealPlan[1].name}</h1>
          <ul>
            <li>Appetizer: {mealPlan[1].appetizer.food_title}</li>
            <li>Entree: {mealPlan[1].meal.food_title}</li>
            <li>Dessert: {mealPlan[1].dessert.food_title}</li>
          </ul>
        </div>
        <div className="meal-plan-box">
          <h1 className="text-xl">{mealPlan[2].name}</h1>
          <ul>
            <li>Appetizer: {mealPlan[2].appetizer.food_title}</li>
            <li>Entree: {mealPlan[2].meal.food_title}</li>
            <li>Dessert: {mealPlan[2].dessert.food_title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealPlanChart;
