import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const LatestPost = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [postData, setPostData] = useState("");
	const fetchPostData = async (api) => {
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
		fetchPostData(`${VITE_API_URL}/latestpost`);
	}, []);
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 mt-16 px-4">
			<ToastContainer></ToastContainer>
			<div className="flex flex-col items-center md:gap-6 gap-4 mb-10">
				<h1 className="md:text-5xl text-3xl font-bold font-sans">
					Latest Post
				</h1>
				<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
			</div>

			<div className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-4">
				{postData &&
					postData.map((post) => (
						<div key={post._id} className="flex flex-col gap-2 p-2 w-full">
							<div className="h-56 overflow-hidden">
								<img
									src={`${VITE_API_URL}${post.imageUrl}`}
									className="w-full h-full sm:object-fit object-center"
									alt=""
								/>
							</div>

							<div className="flex flex-col gap-4">
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
								<h1 className="text-2xl font-medium">{post.heading}</h1>
								<p>{post.paragraph}</p>

								<Link to={`/readmore/${post._id}`}>
									<button className="self-start px-4 py-1 border-2 border-[#ba1c24] rounded-full hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
										Read more
									</button>
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default LatestPost;
