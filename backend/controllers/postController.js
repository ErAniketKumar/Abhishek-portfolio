const postModel = require("../models/postModel");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/api/Images");
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "_" + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage }).single("imageUrl");

const createPost = async (req, res) => {
	upload(req, res, async (err) => {
		if (err) {
			console.log("Error in file upload", err);
			return res.status(500).json({ message: "File upload failed" });
		}
		const { author, heading, paragraph, list, location } = req.body;
		const imageUrl = req.file ? `/Images/${req.file.filename}` : null;
		if (!author || !heading || !imageUrl) {
			return res.status(400).json({ message: "All inputs are required!" });
		}
		try {
			const postData = new postModel({
				author,
				heading,
				paragraph,
				list,
				imageUrl,
				location,
			});
			await postData.save();
			return res.status(201).json({ message: "Record saved successfully!" });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Server Error!" });
		}
	});
};

const getAllPost = async (req, res) => {
	try {
		const postData = await postModel.find({});
		if (postData.length > 0) {
			return res.status(200).json(postData);
		} else {
			return res.status(404).json({ message: "No posts found!" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
};

const deletePost = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedPost = await postModel.findByIdAndDelete(id);
		if (deletedPost) {
			return res.status(200).json({ message: "Post deleted successfully!" });
		} else {
			return res.status(404).json({ message: "Post not found to delete!" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
};

const updatePost = async (req, res) => {
	const { id } = req.params;
	const updateData = req.body;
	try {
		const postUpdateData = await postModel.findByIdAndUpdate(id, updateData, {
			new: true,
		});
		if (postUpdateData) {
			return res
				.status(200)
				.json({ message: "Updated Successfully!", post: postUpdateData });
		} else {
			return res.status(404).json({ message: "Post not found to update!" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
};

const getSinglePost = async (req, res) => {
	const { id } = req.params;
	try {
		const singlePostData = await postModel.findById(id);
		if (singlePostData) {
			return res.status(200).json(singlePostData);
		} else {
			return res.status(404).json({ message: "Not Found!" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
};

const LatestThreePost = async (req, res) => {
	try {
		const latestThreeItems = await postModel
			.find({})
			.sort({ createdAt: -1 })
			.limit(3);
		if (latestThreeItems) {
			return res.status(200).json(latestThreeItems);
		} else {
			return res.status(404).json({ message: "No record found" });
		}
	} catch (error) {
		console.error("show last 3 post error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	createPost,
	getAllPost,
	getSinglePost,
	updatePost,
	deletePost,
	LatestThreePost,
};
