import React from 'react'
import { Link } from 'react-router-dom'

console.log('Home.jsx')

const Home = () => {
    return (
        <>
            <h1 className='text-blue-500 text-center text-6xl'>HOME</h1>
            <Link to="/meal-plan-page" >
                <button type="button" className='text-center w-[100vw] bg-green-300 h-36'>
                    Go to meal plan page Page</button>
            </Link>
        </>
    )
}

export default Home