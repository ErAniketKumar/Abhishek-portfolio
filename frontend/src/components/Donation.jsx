import React from "react";
import "./style/Donation.css";
import upiQRCode from "../assets/AbhiQr.jpg";

const Donation = () => {
	return (
		<div className="w-full">
			<div className=" donation-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[5.6rem] px-4">
					<h1 className="md:text-5xl text-3xl font-bold mb-6 text-center text-white py-5 md:my-5">
						Support Our Mission with Your Donation
					</h1>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
						{/* Donation Details */}
						<div className="bg-[rgb(255,255,255,0.7)] p-8 rounded-lg shadow-lg">
							<h2 className="text-2xl font-semibold mb-4">
								Bank Account Details
							</h2>
							<p className="text-lg mb-2">
								<span className="font-bold">Account Number:</span>{" "}
								007110052939
							</p>
							<p className="text-lg mb-4">
								<span className="font-bold">Bank Name:</span> India post payment bank, Bettiah
							</p>
							<p className="text-lg mb-2">
								<span className="font-bold">IFSC Code:</span> IPOS0000001
							</p>
							<p className="text-lg mb-6">
								<span className="font-bold">Account Holder:</span> Abhishek
								Kumar
							</p>

							{/* UPI QR Code */}
							<h2 className="text-2xl font-semibold mb-4">Donate via UPI</h2>
							<div className="flex justify-center mb-4">
								<img
									src={upiQRCode}
									alt="UPI QR Code"
									className="w-56 h-56 object-contain"
								/>
							</div>
							<p className="text-lg">
								Scan the QR code with any UPI app to make a quick and secure
								donation.
							</p>
						</div>
						<div className="shadow-lg grid grid-cols-2">
							<div className="col-span-2 flex items-center bg-[rgb(255,255,255,0.7)] rounded-md px-10 py-4">
								<p className="text-lg">
									Your contributions make a real difference in improving the
									lives of our community members. Help us build a prosperous and
									resilient Gram Panchayat by supporting initiatives in
									education, housing, and infrastructure.
								</p>
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<p className="text-center p-1 bg-gray-800 text-white mt-2">
					Thank you for your generosity and support in helping us achieve our
					vision for a stronger community!
				</p>
			</div>
		</div>
	);
};

export default Donation;
