const postModel = require("../models/postModel");

const createPost = async (req, res) => {
	const { author, heading, paragraph, list, imageUrl } = req.body;
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
		});
		await postData.save();
		return res.status(201).json({ message: "Record saved successfully!" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
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

module.exports = {
	createPost,
	getAllPost,
	getSinglePost,
	updatePost,
	deletePost,
};
