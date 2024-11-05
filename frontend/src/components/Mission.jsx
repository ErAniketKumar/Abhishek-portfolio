import React from "react";
import { Link } from "react-router-dom";

import {
	FaBook,
	FaHome,
	FaRoad,
	FaUserFriends,
	FaHandHoldingHeart,
} from "react-icons/fa";

import "././style/Mission.css";
const Mission = () => {
	return (
		<div className="w-full">
			<div className="mission-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] bg-[rgba(7,48,177,0.8)] px-4">
					{/* Hero Section */}
					<section className="flex flex-col items-center md:py-[5rem] text-white space-y-2">
						<h1 className="md:text-4xl text-3xl font-bold">
							Our Mission for a Prosperous Somgarh Gram Panchayat
						</h1>
						<p className="md:text-2xl text-xl font-semibold">
							Empowering the Future, Strengthening Our Roots Together
						</p>
					</section>

					{/* Focus Areas Section */}
					<section>
						{/* <h2 className="text-4xl text-white text-center font-bold p-5">
							
						</h2> */}
						<div className="flex flex-col text-white items-center gap-2 py-5">
							<h1 className="md:text-4xl text-3xl font-bold font-sans">
								Focus Areas
							</h1>
							<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
						</div>
						<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4">
							{/* Education */}
							<div className="shadow-md hover:scale-[1.02] p-10 bg-[rgb(255,255,255,0.9)] hover:bg-white flex flex-col items-center gap-4">
								<FaBook size={50} color="#2d72d9" />
								<h3 className="text-xl font-bold">Education</h3>
								<p>
									Quality education for all to empower future generations.
									Initiatives include improving school facilities, scholarships,
									and skill development programs.
								</p>
							</div>

							{/* Housing */}
							<div className="shadow-md hover:scale-[1.02] p-10 bg-[rgb(255,255,255,0.9)] hover:bg-white flex flex-col items-center gap-4">
								<FaHome size={50} color="#2d72d9" />
								<h3 className="text-xl font-bold">
									Housing (Indira Awaas Yojana)
								</h3>
								<p>
									Secure, affordable housing for every family. Ensuring access
									to housing subsidies through Indira Awaas Yojana with
									transparent fund allocation.
								</p>
							</div>

							{/* Infrastructure */}
							<div className="shadow-md hover:scale-[1.02] p-10 bg-[rgb(255,255,255,0.9)] hover:bg-white flex flex-col items-center gap-4">
								<FaRoad size={50} color="#2d72d9" />
								<h3 className="text-xl font-bold">
									Infrastructure (Roads & Drainage)
								</h3>
								<p>
									Building safe roads and effective drainage systems to improve
									rural connectivity and sustainability.
								</p>
							</div>

							{/* Youth Empowerment */}
							<div className="shadow-md hover:scale-[1.02] p-10 bg-[rgb(255,255,255,0.9)] hover:bg-white flex flex-col items-center gap-4">
								<FaUserFriends size={50} color="#2d72d9" />
								<h3 className="text-xl font-bold">Youth Empowerment</h3>
								<p>
									Support for youth through training, job opportunities, and
									recreational facilities to build a strong future generation.
								</p>
							</div>

							{/* Elderly Support */}
							<div className="shadow-md hover:scale-[1.02] p-10 bg-[rgb(255,255,255,0.9)] hover:bg-white flex flex-col items-center gap-4">
								<FaHandHoldingHeart size={50} color="#2d72d9" />
								<h3 className="text-xl font-bold">
									Elderly Support (Pension Programs)
								</h3>
								<p>
									Providing dignified support for the elderly through government
									pensions and subsidies, ensuring their well-being and
									security.
								</p>
							</div>
						</div>
					</section>

					<div className="flex flex-col items-center md:space-y-12 space-y-4 md:mt-10 mt-5">
						{/* Goals Section */}
						<section className="flex flex-col text-white items-center bg-[#0730b1] bg-opacity-50 p-8 rounded-lg shadow-lg">
							<h2 className="text-4xl font-bold mb-6">Goals and Commitments</h2>
							<ul className="list-none space-y-4">
								<li className="flex items-center">
									<span className="mr-2">👉</span>
									Complete road paving in rural areas to improve access and
									safety.
								</li>
								<li className="flex items-center">
									<span className="mr-2">👉</span>
									Provide housing to over 500 families through government
									subsidies.
								</li>
								<li className="flex items-center">
									<span className="mr-2">👉</span>
									Expand educational programs and scholarships for deserving
									students.
								</li>
								<li className="flex items-center">
									<span className="mr-2">👉</span>
									Establish pension coverage for all eligible elderly citizens.
								</li>
							</ul>
						</section>

						{/* Call to Action */}
						<section className="flex flex-col text-white items-center bg-[#0730b1] bg-opacity-50 p-8 rounded-lg shadow-lg">
							<h2 className="text-4xl font-bold mb-6">Get Involved</h2>
							<p className="mb-6 text-center">
								If you’d like to support our mission, join us in making a
								meaningful difference for our Gram Panchayat. Together, we can
								build a brighter future, uplift every family, and bring lasting
								change to our community. Your support matters!
							</p>

							<h2 className="text-3xl font-medium mb-6">Support Our Mission</h2>
							<div className="flex gap-4">
								<a
									href="https://chat.whatsapp.com/BwBSmIll0hN1zffvD3YXHy"
									target="blank"
								>
									<button className="px-6 py-2 rounded-full bg-[#ba1c24] text-white font-semibold text-lg hover:bg-[#122238] duration-150">
										Join group👨‍👩‍👧‍👦
									</button>
								</a>
								<Link
									to="/donate"
									className=" px-6 py-2 rounded-full bg-[#ba1c24] text-white font-semibold text-lg hover:bg-[#122238] duration-150"
								>
									Donate Now 👈
								</Link>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
