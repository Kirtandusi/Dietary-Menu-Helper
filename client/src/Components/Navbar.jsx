import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='flex justify-between items-center w-[92vw] '>
                <NavLink to='/meal-plan-page' className='text-2xl font-bold p-4 text-white hover:text-gray-300'>Home</NavLink>
                <nav className='flex'>
                    <NavLink to='/meal-plan-page' className='text-2xl font-bold p-4 text-white hover:text-gray-300'>About</NavLink>
                    <NavLink to='/meal-plan-page' className='text-2xl font-bold p-4 text-white hover:text-gray-300'>User</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar