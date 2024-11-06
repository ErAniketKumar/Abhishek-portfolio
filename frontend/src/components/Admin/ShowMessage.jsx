import React from "react";

const ShowMessage = () => {
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-14 px-4 mt-5">
			<div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 border-2 gap-2">
				<div className="border p-2 hover:border-2 hover:border-purple-600 flex flex-col items-center text-center">
					<h1 className="font-medium text-lg">Aniket Kumar</h1>
					<p className="text-sm">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
						voluptatem, animi iure quaerat amet placeat consequuntur
					</p>
					<h3>9123120581</h3>
					<div className="flex">
						<button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-700">
							Edit
						</button>
						<button className="px-3 py-1 bg-red-500 text-white rounded-sm hover:bg-red-700">
							Del
						</button>
					</div>
				</div>

			
			</div>
		</div>
	);
};

export default ShowMessage;
