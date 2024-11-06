const mongoose = require("mongoose");
const messageSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		number: {
			type: String,
		},
		email: {
			type: String,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timespamps: true }
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
