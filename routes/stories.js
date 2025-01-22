const express = require("express");
const router = express.Router();
const storyControllers = require("../controllers/stories");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, storyControllers.getStories);

router.get("/allStories", ensureAuth, storyControllers.allStories);

router.post("/createStory", storyControllers.createStory);

router.get("/:id", storyControllers.getStory);

// router.put("/markComplete", storyControllers.markComplete);

// router.put("/markIncomplete", storyControllers.markIncomplete);

// router.delete("/deleteTodo", storyControllers.deleteTodo);

module.exports = router;
