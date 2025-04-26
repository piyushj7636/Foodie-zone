import React from 'react';
import FooterLogo from '../../../public/footer_logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<div className='bg-yellow-primary/10 dark:bg-gray-600 '>
				<div className='max-w-[1200px] mx-auto'>
					<div className='grid md:grid-cols-3 py-5'>
						<div className='py-8 px-4'>
							<h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
								<img src={FooterLogo} alt=''
								className='max-w-[50px]' />
								FOODIE
							</h1>
							<p className='dark:text-white/80 mt-3'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis veritatis adipisci modi maiores possimus quae officia sapiente cupiditate temporibus.
							</p>
							<br />
							<div className='flex items-center gap-3 mt-6'>
								<FaLocationArrow />
								<p>Ghaziabad, Uttar Pradesh</p>
							</div>	
							<div className='flex items-center gap-3 mt-3'>
								<FaMobileAlt />
								<p>+91 0123456789</p>
							</div>
							{/* Social media */}
							<div>
								<div className='flex items-center gap-3 mt-6'>
									<a href="#">
										<FaInstagram className='text-3xl'/>
									</a>
									<a href="#">
										<FaFacebook className='text-3xl'/>
									</a>
									<a href="#">
										<FaLinkedin className='text-3xl'/>
									</a>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
							<div>
								<div className='py-8 px-4'>
									<h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
									<ul className='flex flex-col gap-3 '>
										<li>Home</li>
										<li>About</li>
										<li>Services</li>
										<li>Login</li>
									</ul>
								</div>
							</div>
							<div>
								<div className='py-8 px-4'>
									<h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
									<ul className='flex flex-col gap-3 '>
										<li>Home</li>
										<li>About</li>
										<li>Services</li>
										<li>Login</li>
									</ul>
								</div>
							</div>
							<div>
								<div className='py-8 px-4'>
									<h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
									<ul className='flex flex-col gap-3 '>
										<li>Home</li>
										<li>About</li>
										<li>Services</li>
										<li>Login</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='text-center py-10 border-gray-300/50'>
							@copyright 2025 All rights reserved || Made by Piyush
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;