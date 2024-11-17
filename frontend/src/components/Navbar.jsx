import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4 bg-[#122238] z-[999] fixed top-0 left-0 right-0">
			<nav className=" text-white py-4 md:flex md:justify-between md:items-center">
				{/* Logo */}
				<div className="flex justify-between items-center">
					<Link to="/" className="text-xl text-[#f5c922] font-bold">
						सेवा ही धर्म, विकास ही कर्म- अभिषेक
					</Link>
					{/* Hamburger Icon for Mobile */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white md:hidden focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{isOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Nav Links */}
				<div
					className={`md:flex md:items-center md:space-x-4 ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<Link
						to="/donate"
						className="block md:border md:rounded-full md:hover:bg-[#f5c922] hover:text-red-500 mt-3 md:mt-0"
					>
						DONATE NOW
					</Link>
					<Link to="/about" className="block py-2 md:py-0 hover:text-gray-200">
						ABOUT US
					</Link>
					<Link
						to="/mission"
						className="block py-2 md:py-0 hover:text-gray-200"
					>
						MISSION
					</Link>
					<Link
						to="/gallery"
						className="block py-2 md:py-0 hover:text-gray-200"
					>
						GALLERY
					</Link>
					<a href="#contact" className="block py-2 md:py-0 hover:text-gray-200">
						CONTACT US
					</a>

					<Link
						to="/dashboard"
						className="block py-2 md:py-0 hover:text-gray-200"
					>
						LOGIN
					</Link>
				</div>
			</nav>
			<marquee className="text-green-400 font-bold" behavior="" direction="">
				मैं समाजसेवी अभिषेक सर्राफ, मुखिया प्रत्याशी 2026 ग्राम पंचायत राज
				सोमगढ़, आप सभी पंचायत वासियों को प्रणाम करता हूँ।🙏🙏
			</marquee>
		</div>
	);
};

export default Navbar;
