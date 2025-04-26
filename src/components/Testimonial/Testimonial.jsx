import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
	{
		id:1,
		name: "Samuel",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex est eaque voluptatibus! Dolorem inventore necessitatibus facere velit eveniet praesentium rerum veritatis nam quae. Illo nesciunt eos repudiandae velit. Eligendi.",
		img: "https://picsum.photos/101/101"
	},
	{
		id:2,
		name: "John Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex est eaque voluptatibus! Dolorem inventore necessitatibus facere velit eveniet praesentium rerum veritatis nam quae. Illo nesciunt eos repudiandae velit. Eligendi.",
		img: "https://picsum.photos/102/102"
	},
	{
		id:3,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex est eaque voluptatibus! Dolorem inventore necessitatibus facere velit eveniet praesentium rerum veritatis nam quae. Illo nesciunt eos repudiandae velit. Eligendi.",
		img: "https://picsum.photos/103/103"
	}
];

const Testimonial = () => {
	var settings = {
		dots:true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplayspeed: 2000,
		cssEase: "linear",
		pauseOnHover: true,
		pauseOnFocus: true
	};
	return (
		<>
		<div className='bg-yellow-primary/10'>
			<div
				data-aos="fade-up"
				data-aos-duration="400"
				className='py-10 dark:bg-gray-700 flex justify-center items-center'>
				<div className='container w-[var(--container-padding, --container-padding-sm)]'>
					{/* Header section */}
					<div className='text-center mb-20 max-w-[400px] mx-auto'>
						<p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-50 to-yellow-secondary'>Testimonial</p>
						<h1 className='text-3xl font-bold dark:text-white/75'>Testimonial</h1>
						<p className='text-xs text-gray-400'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ex cum placeat tenetur dolor maxime? Quidem corrupti obcaecati temporibus veritatis nostrum adipisci similique commodi amet voluptates. Autem recusandae praesentium provident?
						</p>
					</div>
					{/* Testimonial section */}
					<div
						data-aos="zoom-in"
						data-aos-duration="400"
						className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
						<Slider {...settings}>
							{testimonialData.map(({id, name, text, img})=>{
									return (
										<div key={id} className='my-6'>
											<div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-yellow-primary/10 relative'>
												<img src={img} alt=''
												className='rounded-full block mx-auto'
												/>
												<p className='text-gray-500 text-sm'>{text}</p>
												<h1 className='text-xl font-bold'>{name}</h1>
												<p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
											</div>
										</div>
									);
								})}
						</Slider>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Testimonial;