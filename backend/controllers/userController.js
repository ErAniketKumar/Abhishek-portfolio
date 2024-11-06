const express = require("express");
const userModel = require("../models/userModel");

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });
		if (user) {
			const isPasswordMatch = user.password === password;
			if (isPasswordMatch) {
				res.cookie("email", email, { httpOnly: true });
				res.cookie("logedin", true, { httpOnly: true });
				return res
					.status(200)
					.json({
						message: "Login Successful",
						user: { _id: user._id, name: user.name },
					});
			} else {
				return res.status(400).json({ message: "Wrong password!" });
			}
		} else {
			console.log("User not registered");
			return res.status(404).json({ message: "User not registered" });
		}
	} catch (error) {
		console.log("Internal error", error);
		return res.status(500).json({ message: "Internal error" });
	}
};

const signup = async (req, res) => {
	const { name, number, email, password, confirmPassword } = req.body;
	try {
		if (!name || !number || !email || !password || !confirmPassword) {
			return res.status(400).json({ message: "All inputs are required" });
		}
		const user = await userModel.findOne({ email });
		if (user) {
			return res.status(409).json({ message: "User already exists" });
		} else {
			if (password === confirmPassword) {
				const userDetails = new userModel({
					name,
					number,
					email,
					password,
				});
				await userDetails.save();
				return res
					.status(201)
					.json({ message: "User registered successfully" });
			} else {
				return res.status(400).json({ message: "Passwords do not match!" });
			}
		}
	} catch (error) {
		console.log("Internal server error", error);
		return res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	login,
	signup,
};
