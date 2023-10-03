import express from "express";
import mongoose from "mongoose";
import MealModel from "../db/meal.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const meals = await MealModel.find()
        res.json(
            meals.map((meal) => {
                return {idMeal: meal.idMeal, name: meal.strMeal, strMealThumb: meal.strMealThumb}
            })
        )
    } catch (error) {
        console.log("Error in get all meals", error);
    }
})

router.get("/:idMeal", async (req, res) => {
    try {
        const idMeal = req.params.idMeal
        const meal = await MealModel.find({idMeal})
        meal.length > 0 ? res.json(meal[0]) : res.status(404).json({msg: `There is no meal with ID ${idMeal}`})
    } catch (error) {
        console.log('Error getting one meal', error)
    }
})

router.post("/", async (req, res) => {
    try {
        const idMeal = req.body.idMeal
        const meal = await MealModel.find({idMeal})
        meal.length > 0 ? 
        res.status(400).json({msg: `The ID ${idMeal} is already exist`}) :
        res.json(await MealModel.create(req.body))
    } catch (error) {
        console.log(`Error creating a new meal`, error)
    }
})


    

export default router