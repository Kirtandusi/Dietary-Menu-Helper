import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import MealPlanMain from './Pages/Meal Page/MealPlanMain';

const WebRouter = () => {
    return (
        <div >
            <Router>
                <Navbar />
                <div className='w-[100vw] h-20' />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/meal-plan-page" element={<MealPlanMain />} />
                </Routes>
            </Router>
        </div>
    )
}

export default WebRouter;