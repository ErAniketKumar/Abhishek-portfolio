import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const LatestPost = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [postData, setPostData] = useState("");
	const fetchPostData = async(api)=>{
		try{
			const response = await fetch(api,{
				method:"POST",
			});
			const data = await response.json();
			if(!response.ok) {
				toast.error(data.message);
			} else {
				setPostData(data);
				toast.success(data.message);
			}
		} catch(error) {
			toast.error(error.message);
		}
	}
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
				<div className="flex flex-col gap-2 p-2 w-full">
					<div className="h-56 overflow-hidden">
						<img
							src="../../images/post (1).jpg"
							className="w-full h-full sm:object-fit object-center"
							alt=""
						/>
					</div>

					<div className="flex flex-col gap-4">
						<div className="text-sm font-medium">
							<span className="text-[#0632b9]">Samhuata</span>
							<span> | July 23, 2024</span>
						</div>
						<h1 className="text-2xl font-medium">
							This is a Random post for testing website
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate laudantium molestias ex deleniti odit laboriosam saepe
							sunt facilis debitis tempora!
						</p>
						<button className="self-start px-4 py-1 border-2 border-[#ba1c24] rounded-full hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-2 p-2 w-full">
					<div className="h-56 overflow-hidden">
						<img
							src="../../images/post (2).jpg"
							className="w-full h-full sm:object-fit object-center"
							alt=""
						/>
					</div>

					<div className="flex flex-col gap-4">
						<div className="text-sm font-medium">
							<span className="text-[#0632b9]">Samhuata</span>
							<span> | July 23, 2024</span>
						</div>
						<h1 className="text-2xl font-medium">
							This is a Random post for testing website
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate laudantium molestias ex deleniti odit laboriosam saepe
							sunt facilis debitis tempora!
						</p>
						<button className="self-start px-4 py-1 border-2 border-[#ba1c24] rounded-full hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-2 p-2 w-full">
					<div className="h-56 overflow-hidden">
						<img
							src="../../images/post (3).jpg"
							className="w-full h-full sm:object-fit object-center"
							alt=""
						/>
					</div>

					<div className="flex flex-col gap-4">
						<div className="text-sm font-medium">
							<span className="text-[#0632b9]">Samhuata</span>
							<span> | July 23, 2024</span>
						</div>
						<h1 className="text-2xl font-medium">
							This is a Random post for testing website
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque.
							
						</p>
						<button className="self-start px-4 py-1 border-2 border-[#ba1c24] rounded-full hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
							Read more
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestPost;
