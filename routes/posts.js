const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update posts
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete posts

// GET posts
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
