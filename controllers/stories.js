const Story = require("../models/Story");

module.exports = {
	getStories: async (req, res) => {
		console.log(req.user);
		try {
			const StoryItems = await Story.find({ userId: req.user.id });
			res.render("dashboard.ejs", {
				stories: StoryItems,
				user: req.user,
			});
		} catch (err) {
			console.log(err);
		}
	},
	createStory: async (req, res) => {
		try {
			await Story.create({
				title: req.body.title,
				body: req.body.body,
				status: req.body.status,
				userId: req.user.id,
			});
			console.log("Story has been added!");
			res.redirect("/story");
		} catch (err) {
			console.log(err);
		}
	},
	// markComplete: async (req, res) => {
	// 	try {
	// 		await Story.findOneAndUpdate(
	// 			{ _id: req.body.StoryIdFromJSFile },
	// 			{
	// 				completed: true,
	// 			}
	// 		);
	// 		console.log("Marked Complete");
	// 		res.json("Marked Complete");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// },
	// markIncomplete: async (req, res) => {
	// 	try {
	// 		await Story.findOneAndUpdate(
	// 			{ _id: req.body.StoryIdFromJSFile },
	// 			{
	// 				completed: false,
	// 			}
	// 		);
	// 		console.log("Marked Incomplete");
	// 		res.json("Marked Incomplete");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// },
	// deleteStory: async (req, res) => {
	// 	console.log(req.body.StoryIdFromJSFile);
	// 	try {
	// 		await Story.findOneAndDelete({ _id: req.body.StoryIdFromJSFile });
	// 		console.log("Deleted Story");
	// 		res.json("Deleted It");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// },
};
