import express from "express";
import MealModel from "../db/meal.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const meals = await MealModel.find().sort({ strMeal: 1 });
    res.json(meals);
  } catch (error) {
    console.log("Error getting all meals", error);
  }
});

router.get("/:idMeal", async (req, res) => {
  try {
    const idMeal = req.params.idMeal;
    const meal = await MealModel.find({ idMeal });
    meal.length > 0
      ? res.json(meal[0])
      : res.status(404).json({ msg: `There is no meal with ID ${idMeal}` });
  } catch (error) {
    console.log("Error getting one meal", error);
  }
});

router.get("/category/:strCategory", async (req, res) => {
  try {
    const strCategory = req.params.strCategory[0].toUpperCase() + req.params.strCategory.slice(1).toLowerCase();
    const meals = await MealModel.find({ strCategory });
    meals.length > 0
      ? res.json(meals)
      : res
          .status(404)
          .json({ msg: `There is no meal with category ${strCategory}` });
  } catch (error) {
    console.log("Error getting meals by category", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const idMeal = req.body.idMeal;
    const meal = await MealModel.find({ idMeal });
    meal.length > 0
      ? res.status(400).json({ msg: `The ID ${idMeal} is already exist` })
      : res.json(await MealModel.create(req.body));
  } catch (error) {
    console.log(`Error creating a new meal`, error);
  }
});

export default router;
