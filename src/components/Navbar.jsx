import React from 'react';
import { Link } from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';

const Navbar = () => {
	return (
		<>
		<div className='shadow-md bg-yellow-primary/10 dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center'>
			<div className='container w-[var(--container-padding, --container-padding-sm)] py-3 sm:py-0'>
				<div className='flex justify-between items-center'>
					<div>
						<a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
							<img src='/food_logo.png' alt='Foodie Zone' className='w-16' /> Foodie
						</a>
					</div>
					<div className='flex items-center gap-4'>
						<div>
							<DarkMode />
						</div>
						<ul className='hidden sm:flex gap-4'>
							<li>
								<Link to="/" className='inline-block py-4 px-4 hover:text-yellow-primary'>Home</Link>
							</li>
							<li>
								<Link to="/about" className='inline-block py-4 px-4 hover:text-yellow-primary'>About</Link>
							</li>
							<li>
								<Link to="/contact" className='inline-block py-4 px-4 hover:text-yellow-primary'>Contact</Link>
							</li>
						</ul>
						<button className='bg-gradient-to-r from-yellow-primary to-yellow-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
							Order
							<FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
							</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Navbar;