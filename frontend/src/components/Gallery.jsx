import React, { useEffect, useState } from "react";
import "./style/Gallery.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Gallery = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [postData, setPostData] = useState("");

	const fetchedPostData = async (api) => {
		try {
			const response = await fetch(api, {
				method: "GET",
			});
			const data = await response.json();
			if (!response.ok) {
				toast.error(data.message);
			} else {
				setPostData(data);

				toast.success(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		fetchedPostData(`${VITE_API_URL}/post`);
	}, []);

	return (
		<div className="w-full">
			<div className="gallery-container">
				<ToastContainer></ToastContainer>
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] bg-[rgba(255,255,255,0.8)] h-full px-4">
					<div className="flex flex-col items-center gap-2 my-5">
						<h1 className="md:text-5xl text-gray-800 text-3xl font-bold font-sans p-2">
							GALLERY
						</h1>
						<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
					</div>
					<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
						{/* cards */}
						{postData &&
							postData.map((post) => (
								<div
									key={post._id}
									className="flex flex-col p-3 w-full hover:bg-white hover:shadow-lg hover:scale-[1.01] hover:border border-slate-400 border"
								>
									<div className="h-44 overflow-hidden">
										<img
											src={`${VITE_API_URL}${post.imageUrl}`}
											className="w-full h-full sm:object-fit object-center"
											alt=""
										/>
									</div>

									<div className="flex flex-col space-y-2">
										<div className="text-sm font-medium">
											<span className="text-[#0632b9]">{post.location}</span>
											<span>
												{" "}
												|{" "}
												{new Date(post.createdAt).toLocaleDateString("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric",
												})}{" "}
											</span>
										</div>
										<h1 className="text-xl font-medium">{post.heading}</h1>

										<Link to={`/readmore/${post._id}`}>
											<button className="self-start px-4 py-1 border border-slate-400  hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
												Read more
											</button>
										</Link>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
