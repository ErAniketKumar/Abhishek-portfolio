import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link, NavLink } from "react-router-dom";
import {
	FaInstagram,
	FaGithub,
	FaReact,
	FaNodeJs,
	FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const mediaIcon = [
		{
			id: 1,
			url: "https://github.com/ErAniketKumar",
			icon: <FaGithub />,
		},
		{
			id: 2,
			url: "https://linkedin.com/in/eraniket",
			icon: <FaLinkedin />,
		},
		{
			id: 3,
			url: "https://instagram.com/eraniket95",
			icon: <FaInstagram />,
		},
		{
			id: 4,
			url: "https://x.com/eraniket95/",
			icon: <FaSquareXTwitter />,
		},
	];

	return (
		<div className="w-full overflow-hidden mt-18">
			<Slider {...settings}>
				<div className="md:h-[40rem] h-[20rem] flex items-center justify-center">
					<img
						src="../../images/carousel/carouselImg (1).jpg"
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>
				<div className="md:h-[40rem] h-[20rem] flex items-center justify-center">
					<img
						src="../../images/carousel/carouselImg (2).jpg"
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>
				<div className="md:h-[40rem] h-[20rem] flex items-center justify-center">
					<img
						src="../../images/carousel/carouselImg (3).jpg"
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>

				<div className="md:h-[40rem] h-[20rem] flex items-center justify-center">
					<img
						src="../../images/carousel/carouselImg (4).jpg"
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>

				<div className="md:h-[40rem] h-[20rem] flex items-center justify-center">
					<img
						src="../../images/carousel/carouselImg (5).jpg"
						className="object-cover w-full h-full"
						alt=""
					/>
				</div>
			</Slider>

			{/* introduction */}
			<div className="max-w-screen-2xl container mx-auto md:px-14 mt-16 px-4">
				<div className="flex flex-col items-center md:gap-6 gap-4 mb-10">
					<h1 className="md:text-5xl text-3xl font-bold font-sans">
						Abhishek Sarraf
					</h1>
					<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div className="shadow-lg">
						<img
							src="../../images/Abhi1.jpg"
							className="w-full object-cover"
							alt=""
						/>
					</div>
					<div className="shadow-lg border p-4">
						<div className="flex space-x-2">
							<h1 className="text-3xl font-semibold  text-[#ba1c24]">
								Follow Abhishek:
							</h1>
							<div className="flex text-2xl md:mt-2 text-indigo-700 gap-4">
								{mediaIcon.map(({ id, url, icon }) => (
									<NavLink key={id} to={url} target="_blank">
										{icon}
									</NavLink>
								))}
							</div>
						</div>

						<div>
							<div className="max-w-2xl bg-white">
								<div>
									{/* Introduction */}
									<section className="">
										<h1 className="text-2xl font-medium text-green-600 my-3">
											Welcome!
										</h1>
										<p className="text-gray-700 text-lg leading-relaxed">
											I am <span className="font-semibold">Abhishek Sarraf</span>, a
											Mukhiya candidate for our gram panchayat, Raj Somgarh. My
											goal is to improve daily life for everyone in our village
											by focusing on basic needs like better roads, clean
											drinking water, healthcare, and support for farmers and
											small businesses. I believe in honest, hardworking
											leadership that listens to the people.
										</p>
									</section>

									{/* Vision and Plans */}
									<section>
										<h2 className="text-2xl font-medium text-green-600 my-3">
											My Vision for Somgarh
										</h2>
										<p className="text-gray-700 text-lg leading-relaxed">
											My vision is simple: a village where everyone feels safe,
											supported, and proud. I plan to improve essential
											services, create better job opportunities, and invest in
											education for our children. Together, we can work to make
											Somgarh panchayat a place where every family can thrive.
										</p>
										<div>
											<a
												href="https://chat.whatsapp.com/BwBSmIll0hN1zffvD3YXHy"
												target="blank"
											>
												<button className="px-6 py-2 my-2 border hover:text-white font-semibold text-lg hover:bg-[#ba1c24] duration-150">
													Join group👨‍👩‍👧‍👦
												</button>
											</a>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center md:gap-6 gap-4 mt-10">
				<h1 className="md:text-5xl text-3xl font-bold font-sans">
					Our Promises
				</h1>
				<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
			</div>
		</div>
	);
};

export default Home;
