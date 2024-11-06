import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LatestPost from "./components/LatestPost";
import Promise from "./components/Promise .jsx";
import YourSupport from "./components/YourSupport";
import Donation from "./components/Donation";
import Dashboard from "./components/Admin/Dashboard";
import MainLayout from "./MainLayout";
import AllPost from "./components/Admin/AllPost";
import ShowMessage from "./components/Admin/ShowMessage";
import CreatePost from "./components/Admin/CreatePost";
import Login from "./components/Admin/Login";
import ProtectedRoute from "./components/Admin/ProtectedRoute"; 
import { AuthProvider } from "./components/Admin/context/AuthContext"; 

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Home />
							<Promise />
							<YourSupport />
							<LatestPost />
							<Contact />
						</MainLayout>
					}
				/>
				<Route
					path="/about"
					element={
						<MainLayout>
							<About />
						</MainLayout>
					}
				/>
				<Route
					path="/gallery"
					element={
						<MainLayout>
							<Gallery />
						</MainLayout>
					}
				/>
				<Route
					path="/mission"
					element={
						<MainLayout>
							<Mission />
						</MainLayout>
					}
				/>
				<Route
					path="/donate"
					element={
						<MainLayout>
							<Donation />
						</MainLayout>
					}
				/>
				{/* Protecting the Admin routes */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/allpost"
					element={
						<ProtectedRoute>
							<AllPost />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/showmessage"
					element={
						<ProtectedRoute>
							<ShowMessage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/createpost"
					element={
						<ProtectedRoute>
							<CreatePost />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
