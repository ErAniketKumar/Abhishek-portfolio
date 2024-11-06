import React from "react";
import "./adStyle/Dashboard.css"
import AdminNavbar from "./AdminNavbar";
const Dashboard = () => {
	return (
		<div className="w-full">
            <AdminNavbar></AdminNavbar>
			<div className=" dashboard-container">
				<div className="max-w-screen-2xl mx-auto md:px-14 mt-[3.7rem] px-4">
                </div>
			</div>
		</div>
	);
};

export default Dashboard;
