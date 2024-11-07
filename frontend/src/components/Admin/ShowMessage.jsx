import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShowMessage = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [messageData, setMessageData] = useState("");
	const navigate = useNavigate();
	const fetchMessageData = async (api) => {
		try {
			const response = await fetch(api, {
				method: "GET",
			});

			const data = await response.json();
			if (!response.ok) {
				toast.error(data.message);
			} else {
				setMessageData(data);
				toast.success(data.message);
				navigate("/showmessage");
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const handleDeleteMessage = async (id) => {
		console.log("id in frnt del msg", id);
		try {
			const response = await fetch(`${VITE_API_URL}/message/${id}`, {
				method: "DELETE",
			});
			console.log("response is del message", response);
			const deletedMessage = await response.json();
			if (!response.ok) {
				toast.error(deletedMessage.message);
			} else {
				toast.success(deletedMessage.message);
				navigate("/showmessage");
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		fetchMessageData(`${VITE_API_URL}/message`);
	}, []);
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4 mt-5">
			<ToastContainer></ToastContainer>
			<div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 border-2 gap-2">
				{messageData &&
					messageData.map((message) => (
						<div
							key={message._id}
							className="border p-2 hover:border-2 hover:border-purple-600 flex flex-col items-center text-center"
						>
							<h1 className="font-medium text-lg">{message.name}</h1>
							<p className="text-sm">{message.message}</p>
							<h3>{message.number}</h3>
							<div className="flex">
								<button
									onClick={() => handleDeleteMessage(message._id)}
									className="px-3 py-1 bg-red-500 text-white rounded-sm hover:bg-red-700"
								>
									Del
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ShowMessage;
