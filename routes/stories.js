const express = require("express");
const router = express.Router();
const storyControllers = require("../controllers/stories");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, storyControllers.getStories);

router.post("/createStory", storyControllers.createStory);

// router.put("/markComplete", storyControllers.markComplete);

// router.put("/markIncomplete", storyControllers.markIncomplete);

// router.delete("/deleteTodo", storyControllers.deleteTodo);

module.exports = router;
