const Story = require("../models/Story");
const User = require("../models/User");

module.exports = {
	getStories: async (req, res) => {
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
	allStories: async (req, res) => {
		try {
			const StoryItems = await Story.find();
			const userInfo = await User.find();
			//get a helper function to get the author name
			StoryItems.forEach((story) => {
				const author = userInfo.find(
					(user) => user._id.toString() === story.userId
				);
				story["author"] = author.userName;
			});
			res.render("allStories.ejs", {
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
	getStory: async (req, res) => {
		try {
			const story = await Story.find({ _id: req.params.id });
			const userInfo = await User.find();
			//get a helper function to get the author name
			const author = userInfo.find(
				(user) => user._id.toString() === story[0].userId
			);
			story[0].author = author.userName;

			res.render("story.ejs", { theStory: story, user: req.user });
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
	deleteStory: async (req, res) => {
		console.log(req.params.id);
		try {
			//delete the story
			await Story.findOneAndDelete({ _id: req.params.id });
			console.log("Deleted Story");
			res.redirect("/story");
		} catch (err) {
			console.log(err);
			res.redirect("/story");
		}
	},
	addStory: (req, res) => {
		res.render("addStory.ejs", { user: req.user });
	},
};
