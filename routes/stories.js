const express = require("express");
const router = express.Router();
const storyControllers = require("../controllers/stories");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, storyControllers.getStories);

router.get("/allStories", ensureAuth, storyControllers.allStories);

router.post("/createStory", storyControllers.createStory);

router.get("/addStory", storyControllers.addStory);

router.get("/:id", storyControllers.getStory);

// router.put("/markComplete", storyControllers.markComplete);

// router.put("/markIncomplete", storyControllers.markIncomplete);

router.delete("/deleteStory/:id", storyControllers.deleteStory);

module.exports = router;
