import React from "react";
import "./style/Gallery.css";

const Gallery = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="w-full">
			<div className="gallery-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] bg-[rgba(255,255,255,0.8)] px-4">
					<div className="flex flex-col items-center gap-2 my-5">
						<h1 className="md:text-5xl text-gray-800 text-3xl font-bold font-sans p-2">
							GALLERY
						</h1>
						<hr className="block h-[3px] rounded-full w-24 bg-[#ba1c24]" />
					</div>
					<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
						{/* cards */}
						{arr.map((item) => (
							<div className="flex flex-col p-3 w-full hover:bg-white hover:shadow-lg hover:scale-[1.01] hover:border border-slate-400">
								<div className="h-44 overflow-hidden">
									<img
										src="../../images/post (1).jpg"
										className="w-full h-full sm:object-fit object-center"
										alt=""
									/>
								</div>

								<div className="flex flex-col space-y-2">
									<div className="text-sm font-medium">
										<span className="text-[#0632b9]">Samhuata</span>
										<span> | July 23, 2024</span>
									</div>
									<h1 className="text-xl font-medium">
										This is a Random post for testing website
									</h1>

									<button className="self-start px-4 py-1 border border-slate-400  hover:bg-[#ba1c24] hover:text-white font-semibold duration-150">
										Read more
									</button>
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
