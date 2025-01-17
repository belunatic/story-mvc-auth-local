const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ["public", "private"],
		default: "public",
	},
	body: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Story", TodoSchema);
