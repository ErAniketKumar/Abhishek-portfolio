import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${VITE_API_URL}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(errorData.message || "Login failed");
			} else {
				const data = await response.json();
				toast.success(data.message || "Login successful");
				login();
				navigate("/dashboard");
			}
		} catch (error) {
		
			toast.error("An error occurred during login.");
			if (process.env.NODE_ENV === "development") {
				// console.error("Error:", error.message || error);
			}
		}
	};

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4">
			<ToastContainer></ToastContainer>
			<div className="flex flex-col items-center mt-10">
				<h1 className="text-2xl font-semibold py-2">Admin Login Only!</h1>
				<marquee behavior="" direction="">
					<span className="text-lg">User profile login comming soon!</span>
				</marquee>
			</div>
			<div className="flex justify-center mt-5">
				<form
					onSubmit={handleLoginSubmit}
					className="space-y-4 border p-5"
					action="/login"
					method="post"
				>
					<div className="flex flex-col">
						<label htmlFor="email">E-mail</label>
						<input
							className="border border-gray-900 p-2"
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							className="border border-gray-900 p-2"
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="px-4 py-2 bg-slate-500 text-white hover:bg-gray-700"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
