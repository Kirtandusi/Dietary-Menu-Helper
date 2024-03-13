const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/meal", (req, res) => {
  const meal = {
    mealPlan: [
      {
        name: "Rheta's",
        appetizer: {
          food_title: "Caesar Salad",
          total_calories: 200,
          dietary_restrictions: ["Vegetarian"],
        },
        meal: {
          food_title: "Spaghetti Bolognese",
          total_calories: 600,
          dietary_restrictions: ["None"],
        },
        dessert: {
          food_title: "Tiramisu",
          total_calories: 350,
          dietary_restrictions: ["Vegetarian"],
        },
      },
      {
        name: "Gordon's",
        appetizer: {
          food_title: "Spring Rolls",
          total_calories: 180,
          dietary_restrictions: ["Vegetarian", "Vegan"],
        },
        meal: {
          food_title: "Grilled Chicken with Mashed Potatoes",
          total_calories: 700,
          dietary_restrictions: ["None"],
        },
        dessert: {
          food_title: "Chocolate Cake",
          total_calories: 400,
          dietary_restrictions: ["Vegetarian"],
        },
      },
      {
        name: "Four Lakes",
        appetizer: {
          food_title: "Greek Salad",
          total_calories: 180,
          dietary_restrictions: ["Vegetarian"],
        },
        meal: {
          food_title: "Grilled Salmon with Wild Rice",
          total_calories: 550,
          dietary_restrictions: ["Pescatarian"],
        },
        dessert: {
          food_title: "Fruit Salad",
          total_calories: 150,
          dietary_restrictions: ["Vegetarian", "Vegan"],
        },
      },
    ],
  };

  res.json(meal);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
