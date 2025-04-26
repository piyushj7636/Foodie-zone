import React from 'react';
import Img2 from "../../../public/food_2.png"

const ServicesData = [
	{
		id: 1,
		img: Img2,
		name: "Salad",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem eos architecto voluptatibus praesentium fuga, recusandae odit repellat nisi, voluptas maiores natus quibusdam ratione, facilis aspernatur. Hic, consequuntur facere? Culpa."
	},
	{
		id: 2,
		img: Img2,
		name: "Indian Thali",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem eos architecto voluptatibus praesentium fuga, recusandae odit repellat nisi, voluptas maiores natus quibusdam ratione, facilis aspernatur. Hic, consequuntur facere? Culpa."
	},
	{
		id: 3,
		img: Img2,
		name: "Chole",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem eos architecto voluptatibus praesentium fuga, recusandae odit repellat nisi, voluptas maiores natus quibusdam ratione, facilis aspernatur. Hic, consequuntur facere? Culpa."
	}
]

const Services = () => {
	return (
		<>
			<div className='py-10 dark:bg-black bg-yellow-primary/10 flex justify-center items-center'>
				<div className='container w-[var(--container-padding, --container-padding-sm)]'>
					{/* Header section */}
					<div className='text-center mb-20 max-w-[400px] mx-auto'>
						<p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-50 to-yellow-secondary'>Our services</p>
						<h1 className='text-3xl font-bold dark:text-white/75'>Services</h1>
						<p className='text-xs text-gray-400'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ex cum placeat tenetur dolor maxime? Quidem corrupti obcaecati temporibus veritatis nostrum adipisci similique commodi amet voluptates. Autem recusandae praesentium provident?
						</p>
					</div>
					{/* Card section */}
					<div>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-14 md:grid-cols-3 md:gap-5 place-items-center'>
							{ServicesData.map(({id, img, name, description}) => {
								return (
									<div
										data-aos="zoom-in"
										data-aos-duration="400"
										data-aos-once="true" 
										key={id}
										className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-yellow-primary hover:text-white duration-300 p-4 shadow-xl'>
										<div className='h-[100px]'>
											<img src={img} alt=''
											className='max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
										</div>
										<div className='p-4 text-center'>
											<h1 className='text-xl font-bold dark:text-white/75'>{name}</h1>
											<p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;