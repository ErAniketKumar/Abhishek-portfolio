import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreatePost = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const [heading, setHeading] = useState("");
	const [author, setAuthor] = useState("");
	const [paragraph, setParagraph] = useState("");
	const [list, setList] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const navigate = useNavigate();

	const handleLostItemForm = async (e) => {
		e.preventDefault();
		const createPostData = new FormData();

		createPostData.append("author", author);
		createPostData.append("heading", heading);
		createPostData.append("paragraph", paragraph);
		createPostData.append("list", list);
		createPostData.append("imageUrl", imageFile); 

		const response = await fetch(`${VITE_API_URL}/post`, {
			method: "POST",
			body: createPostData,
			credentials: "include",
		});
		const data = await response.json();
		if (!response.ok) {
			toast.error(data.message);
		} else {
			toast.success(data.message);
			navigate("/allpost");
		}
	};
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4">
			<ToastContainer />
			<h1 className="text-2xl text-slate-500 font-medium p-2 flex justify-center">
				Post Blogs/Gallery information
			</h1>
			<div className="flex justify-center border-2 p-2">
				<form
					className="flex flex-col space-y-4"
					action="/post"
					method="post"
					encType="multipart/form-data"
					onSubmit={handleLostItemForm}
				>
					<div className="flex flex-col">
						<label htmlFor="author">Author Name</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="author"
							id="author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="heading">
							Please enter the heading/title of post.
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="heading"
							id="heading"
							value={heading}
							onChange={(e) => setHeading(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="paragraph">Paragraph</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="paragraph"
							id="paragraph"
							value={paragraph}
							onChange={(e) => setParagraph(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="list">Lists</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="list"
							id="list"
							value={list}
							onChange={(e) => setList(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="image">Upload Image</label>
						<input
							className="p-2"
							accept="image/*"
							type="file"
							name="imageUrl"
							id="imageUrl"
							onChange={(e) => setImageFile(e.target.files[0])}
						/>
					</div>

					<button className="bg-slate-500 text-white hover:bg-gray-700  px-2 py-2">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
