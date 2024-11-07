const messageModel = require("../models/messageModel");

const saveMessage = async (req, res) => {
	const { name, number, email, message } = req.body;
	try {
		if (!name || !message) {
			return res.status(400).json({ message: "All inputs are required!" });
		}
		const messageData = new messageModel({
			name,
			number,
			email,
			message,
		});
		await messageData.save();
		return res.status(200).json({ message: "Message sent successfully!" });
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ message: "Internal server error at message save!" });
	}
};

const getAllMessage = async (req, res) => {
	try {
		const messageData = await messageModel.find({});
		return res.status(200).json(messageData);
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ message: "Internal server error at message fetch!" });
	}
};

const deleteMessage = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedMessage = await messageModel.findByIdAndDelete(id);
		if (!deletedMessage) {
			return res.status(404).json({ message: "Message not found" });
		}
		res.status(200).json({ message: "Message deleted successfully" });
	} catch (error) {
		console.error("Error deleting message:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	saveMessage,
	getAllMessage,
	deleteMessage,
};
