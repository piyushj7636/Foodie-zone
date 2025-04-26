import React from 'react';
import PlayStoreImg from '../../../public/playstore_icon.png'
import AppStoreImg from '../../../public/appstore_icon.png'
import Gif from '../../../public/gif_icon.gif'


const AppStore = () => {
	return (
		<>
			<div className=' dark:bg-gray-800 bg-yellow-primary/10 py-14 flex justify-center items-center'>
				<div className='container'>
					<div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
						<div
							data-aos="fade-up"
							data-aos-duration="400"
							className='space-y-6 max-w-xl mx-auto'>
							<h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Foodie is Available for Android and IOS</h1>
							<div className='flex flex-wrap justify-center sm:justify-start items-center gap-4'>
								<a href="#" className='mt-4'>
									<img src={PlayStoreImg} alt='playstore'
										className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] mb-3'
									/>
								</a>
								<a href="#" className=''>
									<img src={AppStoreImg} alt='playstore'
										className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
									/>
								</a>
							</div>
						</div>
						<div data-aos="zoom-out" data-aos-duration="400">
								<img src={Gif} alt='gif' className='max-w-[300px] mx-auto' />
							</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppStore;