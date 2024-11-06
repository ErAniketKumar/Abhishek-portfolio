const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/userController");

const {
	createPost,
	getAllPost,
	getSinglePost,
	updatePost,
	deletePost,
} = require("../controllers/postController");

const {
	saveMessage,
	getAllMessage,
} = require("../controllers/messageController");

router.post("/login", login);
router.post("/signup", signup);

router.post("/post", createPost);
router.get("/post", getAllPost);
router.delete("/post/:id", deletePost);
router.put("/post/:id", updatePost);
router.get("/post/:id", getSinglePost);

router.post("/message",saveMessage);
router.get("/message",getAllMessage);

module.exports = router;
