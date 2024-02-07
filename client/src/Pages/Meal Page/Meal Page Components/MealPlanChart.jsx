import React, { useState } from 'react'

const MealPlanChart = () => {
    // VAR SET IN PLACE FOR USE OF BACKEND IN FUTURE
    const [mealPlan, setMealPlan] = useState([
        {
            name: 'Rheta\'s',
            meals: [
                {
                    name: 'Appetizer',
                    food: 'Eggs'
                },
                {
                    name: 'Meal',
                    food: 'Sandwich'
                },
                {
                    name: 'Dessert',
                    food: 'Steak'
                }
            ]
        },
        {
            name: 'Gordon\'s',
            meals: [
                {
                    name: 'Appetizer',
                    food: 'Bread'
                },
                {
                    name: 'Meal',
                    food: 'Soup'
                },
                {
                    name: 'Dessert',
                    food: 'Cake'
                }
            ]
        },
        {
            name: 'Four Lakes',
            meals: [
                {
                    name: 'Appetizer',
                    food: 'Salad'
                },
                {
                    name: 'Meal',
                    food: 'Rice'
                },
                {
                    name: 'Dessert',
                    food: 'Ice Cream'
                }
            ]
        }
    ])

    return (
        <div>
            <div id='box-container' className='flex justify-center items-center w-[700px] h-[450px] bg-stone-700'>
                <div className='meal-plan-box'>
                    <h1 className='text-xl'>{mealPlan[0].name}</h1>
                    <ul>
                        <li>{mealPlan[0].meals[0].name}: {mealPlan[0].meals[0].food}</li>
                        <li>{mealPlan[0].meals[1].name}: {mealPlan[0].meals[1].food}</li>
                        <li>{mealPlan[0].meals[2].name}: {mealPlan[0].meals[2].food}</li>
                    </ul>
                </div>
                <div className='meal-plan-box'>
                    <h1 className='text-xl'>{mealPlan[1].name}</h1>
                    <ul>
                        <li>{mealPlan[1].meals[0].name}: {mealPlan[1].meals[0].food}</li>
                        <li>{mealPlan[1].meals[1].name}: {mealPlan[1].meals[1].food}</li>
                        <li>{mealPlan[1].meals[2].name}: {mealPlan[1].meals[2].food}</li>
                    </ul>
                </div>
                <div className='meal-plan-box'>
                    <h1 className='text-xl'>{mealPlan[2].name}</h1>
                    <ul>
                        <li>{mealPlan[2].meals[0].name}: {mealPlan[2].meals[0].food}</li>
                        <li>{mealPlan[2].meals[1].name}: {mealPlan[2].meals[1].food}</li>
                        <li>{mealPlan[2].meals[2].name}: {mealPlan[2].meals[2].food}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MealPlanChart