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

module.exports = {
	saveMessage,
	getAllMessage,
};
