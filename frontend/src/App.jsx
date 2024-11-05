import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LatestPost from "./components/LatestPost";
import Promise from "./components/Promise ";
import YourSupport from "./components/YourSupport";
import Donation from "./components/Donation";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home></Home>
							<Promise></Promise>
							<YourSupport></YourSupport>
							<LatestPost></LatestPost>
							<Contact></Contact>
						</>
					}
				></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/gallery" element={<Gallery></Gallery>}></Route>
				<Route path="/mission" element={<Mission></Mission>}></Route>
				{/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
				<Route path="/donate" element={<Donation></Donation>}></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
