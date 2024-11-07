import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllPost = () => {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const [postData, setPostData] = useState([]);
	const fetchPostData = async (api) => {
		const response = await fetch(api, {
			method: "GET",
		});
		const data = await response.json();
		if (!response.ok) {
			toast.error(data.message);
		} else {
			setPostData(data);
		}
	};

	const handlePostDelete = async (id) => {
		try {
			const response = await fetch(`${VITE_API_URL}/post/${id}`, {
				method: "DELETE",
			});
			const deletedPost = await response.json();
			if (!response.ok) {
				toast.error(deletedPost.message);
			} else {
				toast.success(deletedPost.message);
				navigate("/allpost");
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		fetchPostData(`${VITE_API_URL}/post`);
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4">
			<ToastContainer></ToastContainer>
			<table className="min-w-full mt-10 bg-white border border-gray-200">
				<thead>
					<tr className="bg-gray-100 border-b">
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
							Title
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
							Date
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{postData &&
						postData.map((post) => (
							<React.Fragment key={post._id}>
								<tr className="border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{post.heading}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{new Date(post.createdAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<button className="text-indigo-600 hover:text-indigo-900">
											Edit
										</button>

										<button
											onClick={() => handlePostDelete(post._id)}
											className="text-red-600 hover:text-red-900 ml-4"
										>
											Delete
										</button>
									</td>
								</tr>
							</React.Fragment>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default AllPost;
