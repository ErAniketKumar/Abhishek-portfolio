import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ReadMore = () => {
	const [singlePost, setSignlePost] = useState("");
	const { id } = useParams();
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	const fetchSinglePostData = async (api) => {
		try {
			const response = await fetch(api, {
				method: "GET",
			});
			const data = await response.json();
			if (!response.ok) {
				toast.error(data.message);
			} else {
				toast.success(data.message);
				setSignlePost(data);
			}
		} catch (error) {
			toast.error(error.error);
		}
	};

	useEffect(() => {
		fetchSinglePostData(`${VITE_API_URL}/post/${id}`);
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 mt-16 px-4">
			<div className="flex flex-col">
				<div>
					<img src={`${VITE_API_URL}${singlePost.imageUrl}`} alt="" />
				</div>
				<div className="space-y-2 mt-2">
					<div className="text-lg font-medium">
						<span className="text-[#0632b9]">{singlePost.location}</span>
						<span>
							<span>
								{" "}
								|{" "}
								{new Date(singlePost.createdAt).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}{" "}
							</span>
						</span>
					</div>
					<h1 className="text-3xl font-bold text-gray-800">
						{singlePost.heading}
					</h1>
					<p className="text-lg text-gray-700">{singlePost.paragraph}</p>
					<p className="text-indigo-600">Tags: #mission2026 #abhisheksarraf</p>
					<Link to="/gallery">
						<button className="py-2 px-8 border shadow-md hover:bg-[#ba1c24] hover:text-white">
							Back
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ReadMore;
