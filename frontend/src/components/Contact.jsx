import React from "react";
import "../components/style/Contact..css";

const Contact = () => {
	return (
		<div className="w-full">
			<div className=" contact-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] px-4">
					<div className="grid md:grid-cols-2 grid-cols-1 ">
						<div className="bg-white  shadow-lg mt-4 p-10">
							<div className="text-center space-y-4">
								<h1 className="md:text-4xl text-3xl font-semibold">
									Message
									<span className="text-[#ba1c24]"> Abhishek Sarraf</span>
								</h1>
								<p className="text-lg py-4">
									If you have any questions, ideas or propositions, feel free to
									write a message, and Abhishek will contact you.
								</p>
							</div>
							<form action="" className="flex gap-4 flex-col">
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="text"
									name="name"
									placeholder="Enter your full name*"
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="number"
									name="nuber"
									placeholder="Enter your number*"
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="email"
									name="email"
									placeholder="Enter your email*"
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type=""
									name="message"
									placeholder="Type your message*"
								/>
								<button className="px-5 py-2 font-semibold bg-[#ba1c24] rounded-full hover:bg-[#122238] text-white">
									Send message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
