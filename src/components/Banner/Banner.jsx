import React from 'react';
import Food1 from "../../../public/food_1.png"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"

const Banner = () => {
	return (
		<>
		<div className='min-h-[500px] dark:bg-gray-900 bg-yellow-primary/10 flex justify-center items-center'>
			<div>
				<div 
					data-aos="slide-up"
					data-aos-duration="500"
					className='container w-[var(--container-padding, --container-padding-sm)]'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{/* image section */}
						<div>
							<img
							src={Food1}
							alt=''
							className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'
							/>
						</div>
						{/* text-content section */}
						<div className='flex flex-col justify-center items-center gap-6 sm:pt-0 mr-10'>
							<h1 className='text-3xl sm:text-4xl font-bold dark:text-white/65'>
								Lorem ipsum dolor
							</h1>
							<p className='text-sm text-gray-500 tracking-wide leading-5 text-center'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sequi illo possimus in corrupti? Provident quae omnis reprehenderit iste magni nulla sed doloribus, nesciunt facere ut, perspiciatis repellat itaque veniam.
							</p>
							<div className='gap-6 flex justify-center items-center'>
								<div>
									<GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400' />
								</div>
								<div>
									<IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' />
								</div>
								<div>
									<GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400' />
								</div>
							</div>
							<div className='flex justify-center items-center'>
								<button className='bg-gradient-to-r from-yellow-primary to-yellow-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200'>
									Order Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Banner;