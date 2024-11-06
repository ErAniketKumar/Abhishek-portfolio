const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
	{
		author: {
			type: String,
		},
		heading: {
			type: String,
			required: true,
		},
		paragraph: {
			type: String,
		},
		list: {
			type: String, 
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;
