import express from "express";
import UserModel from "../db/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/user/:username", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Wrong email or password" });
    }

    await bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(401).json({ error: "Wrong email or password" });
      }
      if (result) {
        return res.status(200).json({ message: "User logged in successfully", user });
      }
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    const existingEmail = await UserModel.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      favorites: [],
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/add-to-favorites", async (req, res) => {
  try {
    const { username, _id } = req.body;

    const user = await UserModel.findOneAndUpdate({ username }, { $addToSet: { favorites: _id } }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Meal added to favorites", user });
  } catch (error) {
    console.error("Error adding meal to favorites", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/remove-from-favorites", async (req, res) => {
  try {
    const { username, _id } = req.body;

    const user = await UserModel.findOneAndUpdate({ username }, { $pull: { favorites: _id } }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Meal removed from favorites", user });
  } catch (error) {
    console.error("Error removing meal from favorites", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
