const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
	{
		author: {
			type: String, // Name or identifier of the post's author
		},
		heading: {
			type: String, // Title or heading of the post
			required: true, // This field must be provided when creating a post
		},
		paragraph: {
			type: String, // Body content of the post
		},
		list: {
			type: String, // List (possibly a serialized string like JSON or comma-separated values)
		},
		imageUrl: {
			type: String,
			required: true,
		},
		
		location: {
			type: String, // Location information associated with the post
		},
	},
	{ timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// Create a model for the schema
const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel; // Export the model for use in other parts of the app
