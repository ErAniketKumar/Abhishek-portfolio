import React from "react";
import "./style/Promise.css";

const Promise = () => {
	return (
		<div className="w-full">
			<div className="promise-container">
				<div className="max-w-screen-2xl container mx-auto text-white md:px-14 px-4 bg-[rgba(7,48,177,0.7)] mt-5">
					<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
						<div className="flex flex-col items-center gap-3 px-5 py-10">
							<div className="w-[12rem] h-[10rem]">
								<img src="../../images/eduImg.png" alt="" />
							</div>
							<h1 className="text-3xl font-semibold">Education</h1>
							<p>
								We are committed to providing quality education for every child
								in our Panchayat, improving school facilities and resources to
								empower our youth for a brighter future.
							</p>
						</div>

						<div className="flex flex-col items-center gap-3 p-5">
							<div className="w-[12rem] h-[10rem]">
								<img src="../../images/healthImg.png" alt="" />
							</div>
							<h1 className="text-3xl font-semibold">Health</h1>
							<p>
								We are promise to bring better healthcare to everyone, with
								improved facilities and daily support for a healthier, happier
								Panchayat.
							</p>
						</div>

						<div className="flex flex-col items-center gap-3 p-5">
							<div className="w-[12rem] h-[10rem]">
								<img src="../../images/housingImg.png" alt="" />
							</div>
							<h1 className="text-3xl font-semibold">Housing</h1>
							<p>
								We are dedicated to providing safe housing for all, ensuring
								access to government schemes like Indira Awas Yojana so every
								family has a secure place to call home.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promise;
