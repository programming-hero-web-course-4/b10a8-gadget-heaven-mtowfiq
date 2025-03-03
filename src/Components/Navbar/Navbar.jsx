import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-9 md:px-40'>
            <div>
                <h2>Gadget Heaven</h2>
            </div>
            <div className='space-x-12'>
                <NavLink to="/">Home</NavLink>
                <NavLink>Statistics</NavLink>
                <NavLink>Dashboard</NavLink>
            </div>
            <div className='flex gap-4'>
                <div className='w-10 h-10'>
                    <img className='p-2 bg-white border border-black rounded-full' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" />
                </div>
                <div className='w-10 h-10'>
                    <img className='p-2 bg-white border border-black rounded-full' src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;