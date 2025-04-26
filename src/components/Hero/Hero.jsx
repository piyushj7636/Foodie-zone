import React, { useState } from 'react';
import bgImg from '../../../public/bg-image.png'
import Food1 from '../../../public/food_1.png'
import Food2 from '../../../public/food_2.png'
import Food3 from '../../../public/food_3.png'

const ImageList = [
	{
		id: 1,
		img: Food1
	},
	{
		id: 2,
		img: Food2
	},
	{
		id: 3,
		img: Food3
	}
];

const bgImage = {
	backgroundImage: `url(${bgImg})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	width: "100%",
	height: "100%"
}

const Hero = () => {
	const[imageId, setImageId] = useState(Food1);

	return (
		<>
		<div
			style={bgImage}
			className='min-h-[550px] sm:min-h-[600px] bg-yellow-primary/10 dark:bg-gray-950 duration-200 flex justify-center items-center'>
			<div className='container w-[var(--container-padding, --container-padding-sm)] pb-8 sm:pb-0'>
				<div className='grid grid-cols-1 sm:grid-cols-2'>
					{/*text content section*/}
					<div 
						data-aos="zoom-out"
						data-aos-duration="400"
						data-aos-once="true"
						className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
						<h1 className='text-5xl sm:text-6xl dark:text-white/85 lg:text-7xl font-bold'>
							Welcome to the <span className='font-extrabold'>Foodie</span> Zone
						</h1>
						<p className='text-sm text-white/75'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque minima et praesentium excepturi natus hic totam voluptatibus recusandae, omnis facere illo nemo cupiditate, accusantium accusamus suscipit laudantium eum mollitia.
						</p>
						<div>
							<button className='bg-gradient-to-r from-yellow-primary to-yellow-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 drop-shadow-[0_0_2px_rgba(0,0,0,1)]'>Order now</button>
						</div>
					</div>
					{/*Image section*/}
					<div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
						{/*main image section*/}
						<div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
							<img 
								data-aos="zoom-out"
								data-aos-duration="400"
								data-aos-once="true"
								src={imageId} alt="" className='w-[200px] sm:w-[300px] h-auto mx-auto animate-spin [animation-duration:40s]'/>
						</div>
						{/*image list section*/}
						<div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
							{
								ImageList.map((item)=>(
									<img
									data-aos="zoom-out"
									data-aos-duration="400"
									data-aos-once="true"
									key={item.id}
									src={item.img}
									className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
									onClick={()=>{
										setImageId(item.id === 1 ? Food1: item.id ===2 ? Food2 : Food3);
										}}
									 />
								))
							}
						</div>
					</div>
				</div>
			</div>	
		</div>
		</>
	);
};

export default Hero;