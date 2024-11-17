import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
	const mediaIcon = [
		{
			id: 1,
			url: "https://www.facebook.com/samajseviabhisheksarraf/",
			icon: <FaFacebook />,
		},
		{
			id: 2,
			url: "https://linkedin.com/in/eraniket",
			icon: <FaLinkedin />,
		},
		{
			id: 3,
			url: "https://instagram.com/abhi_shekshroff",
			icon: <FaInstagram />,
		},
		{
			id: 4,
			url: "https://x.com/Abhishe28618148/",
			icon: <FaSquareXTwitter />,
		},
	];
	return (
		<div className="mb-0 mt-5">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="bg-[#122238] text-white md:px-20 p-6">
					<div>
						<h1 className="text-xl font-bold">CONTACT US</h1>
						<p>+91 9572740290</p>
						<p>contactabhisheksarraf@gmail.com</p>
					</div>
					<div>
						<h1 className="text-xl font-bold">ADDRESS</h1>
						<p>Samhauta,Sathi,Bettiah</p>
						<p>West Champaran,Bihar</p>
						<p>845449</p>
					</div>
				</div>
				<div className=" bg-[#f5c922] md:px-20 p-6">
					<div className="space-y-4">
						<h1 className="text-xl font-bold">SOCIALIZE WITH SOCIAL</h1>
						<div className="flex text-2xl gap-4">
							{mediaIcon.map(({ id, url, icon }) => (
								<NavLink key={id} to={url} target="_blank">
									{icon}
								</NavLink>
							))}
						</div>

						<div>
							<p className="text-xl font-bold">View Developer Portfolio</p>
							<Link to="https://eraniket.netlify.app" target="_blank">
								https://eraniket.netlify.app
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
