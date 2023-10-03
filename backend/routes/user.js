import express from "express";
import UserModel from "../db/user.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const existingUser = await UserModel.findOne({ email });

        if (existingUser){
            return res.status(400).json({error: "Email is already registered"});
        }

        const newUser = new UserModel({
            username,
            email,
            password,
            favorites: []
        })

        await newUser.save()

        res.status(201).json({ message: "User registered successfully"})
    } catch (error) {
        console.error("Error registering user:", error)
        res.status(500).json({error: "Internal server error"})
    }
})

router.post("/add-to-favorites", async (req, res) => {
    try {
        const {userId, idMeal} = req.body;

        const user = await UserModel.findById(userId)

        if (!user){
            return  res.status(404).json({error: "User not found"})
        }

        user.favorites.push(idMeal)

        await user.save()

        res.status(200).json({message:"Meal added to favorites"})
    } catch (error){
        console.error("Error adding meal to favorites", error)
        res.status(500).json({error: "Internal server error"})
    }
})

export default router;