import React, { useState } from "react";
import "../components/style/Contact..css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleMessageSubmit = async (e) => {
		e.preventDefault();
		try {
			const messageData = {
				name,
				number,
				email,
				message,
			};

		
			const response = await fetch(`${VITE_API_URL}/message`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(messageData),
			});
			const data = await response.json();
			if (!response.ok) {
				alert("some error to sent message")
				toast.error(data.message);
			} else {
				toast.success(data.message);
				alert("message sent successfully!")
				setEmail("");
				setName("");
				setNumber("");
				setMessage("");
			}
		} catch (error) {
			toast.error(error.message);
			alert("some error to sent message")
		}
	};

	return (
		<div id="contact" className="w-full">
			<div className=" contact-container">
				<ToastContainer></ToastContainer>
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
							<form
								action="/message"
								className="flex gap-4 flex-col"
								method="post"
								onSubmit={handleMessageSubmit}
							>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="text"
									name="name"
									placeholder="Enter your full name*"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="number"
									name="number"
									placeholder="Enter your number*"
									value={number}
									onChange={(e) => setNumber(e.target.value)}
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type="email"
									name="email"
									placeholder="Enter your email*"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									className="bg-gray-200 p-2 rounded-full"
									type=""
									name="message"
									placeholder="Type your message*"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
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
