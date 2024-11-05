import React from "react";
import "./style/About.css";

const About = () => {
	return (
		<div className="w-full">
			<div className=" about-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] px-4">
					<div className="flex flex-col items-center relative top-60 text-white">
						<div className="border-4 border-stone-400 py-5 px-4 md:px-16 text-center">
							<h1 className="text-2xl md:text-8xl font-bold">ABOUT US</h1>
							<h2 className="text-xl md:text-3xl font-semibold">
								Use your right for right
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-screen-2xl container mx-auto md:px-14 mt-10 px-4">
				<div className="flex flex-col gap-4">
					<section>
						<h1 className="text-3xl font-bold  text-[#ba1c24] mb-2">
							Who we are
						</h1>

						<h1 className="text-5xl text-gray-700 font-semibold">
							For the best development, vote for us.
						</h1>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-2">
							Our Mission for 2026
						</h2>
						<p>
							The 2026 election is about the future of our panchayat/village. Support
							<b> Abhishek Sarraf</b> in his mission to enhance the quality of life for
							everyone in Gram Panchayat Raj Somgarh. Our focus will be on
							improving infrastructure, advancing education, ensuring accessible
							healthcare, and empowering women and youth in our community.
						</p>
					</section>
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-2">Key Goals</h2>
						<ul className="list-disc list-inside">
							<li>
								<strong>Quality Infrastructure</strong>: Roads, clean water, and
								public facilities.
							</li>
							<li>
								<strong>Education and Youth Empowerment</strong>: Scholarships
								and vocational training.
							</li>
							<li>
								<strong>Accessible Healthcare</strong>: Medical camps and
								preventive health measures.
							</li>
							<li>
								<strong>Women and Community Empowerment</strong>: Equal
								resources and economic opportunities.
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-2">
							Our Commitment to You
						</h2>
						<ul className="list-disc list-inside">
							<li>
								<strong>Listening to Every Voice</strong>: Regular meetings to
								address community concerns.
							</li>
							<li>
								<strong>Transparency</strong>: Open and community-involved
								decision-making.
							</li>
							<li>
								<strong>Dedication</strong>: Focused on serving Gram Panchayat
								Raj Somgarh with integrity.
							</li>
						</ul>
					</section>

					<section>
						<button className="px-6 py-2 rounded-full bg-[#ba1c24] text-white font-semibold text-lg hover:bg-[#122238] duration-150">
							Join group👨‍👩‍👧
						</button>
					</section>
				</div>
				<div>
					<img
						src="../../images/selfPic2.jpg"
						className="w-full object-cover"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
