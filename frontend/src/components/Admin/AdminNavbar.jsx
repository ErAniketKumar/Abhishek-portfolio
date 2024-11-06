import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4 bg-[#122238] z-[999] fixed top-0 left-0 right-0">
			<nav className=" text-white py-4 md:flex md:justify-between md:items-center">
				{/* Logo */}
				<div className="flex justify-between items-center">
					<Link to="/dashboard" className="text-xl text-[#f5c922] font-bold">
						Hello Admin
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
						to="/allpost"
						className="block border rounded-full p-2 hover:bg-[#f5c922] hover:text-red-500 py-2 md:py-0 "
					>
						All POST
					</Link>
					<Link to="/createpost" className="block py-2 md:py-0 hover:text-gray-200">
						CREATE POST
					</Link>
					<Link
						to="/showmessage"
						className="block py-2 md:py-0 hover:text-gray-200"
					>
						SHOW MESSAGES
					</Link>
                    <Link
						to="/login"
						className="block py-2 md:py-0 hover:text-gray-200"
					>
						LOGIN
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default AdminNavbar;
