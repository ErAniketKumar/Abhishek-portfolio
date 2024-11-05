import React from "react";
import { Link } from "react-router-dom";

const YourSupport = () => {
	return (
		<div className="w-full bg-[#122238] text-white">
			<div className="max-w-screen-2xl container mx-auto md:px-48 px-4">
				<div className="flex flex-col items-center gap-6 py-10">
					<h1 className="md:text-5xl text-3xl font-bold font-sans">
						Your Support Matter
					</h1>
					<h2 className="text-lg text-[#d80000]">पंचायत वासियों की सेवा ही मेरा कर्तव्य है।</h2>
					<h1 className="text-2xl underline underline-offset-4 font-serif font-semibold">Help Us</h1>
					<p>
						Every small contribution strengthens our mission for a better
						tomorrow. Your support fuels change, empowers communities, and
						builds a future where every voice is heard. Join us in making a
						difference—together, we can achieve a brighter future!
					</p>
					<Link to="/donate" className=" px-6 py-2 rounded-full bg-[#ba1c24] text-white font-semibold text-lg hover:text-gray-900 hover:bg-[#fff] duration-150">
						Donate Now 👈
					</Link>
				</div>
			</div>
		</div>
	);
};

export default YourSupport;
