import express from "express";
import MealModel from "../db/meal.model.js";

const router = express.Router();

router.get("/meals", async (req, res) => {
  try {
    const meals = await MealModel.find().sort({ strMeal: 1 });
    res.json(meals);
  } catch (error) {
    console.log("Error getting all meals", error);
  }
});

router.get("/meals/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const meal = await MealModel.findOne({ _id });
    meal
      ? res.json(meal)
      : res.status(404).json({ msg: `There is no meal with id ${_id}` });
  } catch (error) {
    console.log("Error getting one meal", error);
  }
});

router.get("/category/:strCategory", async (req, res) => {
  try {
    const strCategory =
      req.params.strCategory[0].toUpperCase() +
      req.params.strCategory.slice(1).toLowerCase();
    const meals = await MealModel.find({ strCategory });
    meals.length > 0
      ? res.json(meals)
      : res.status(404).json({ msg: `There is no meal with category ${strCategory}` });
  } catch (error) {
    console.log("Error getting meals by category", error);
  }
});

router.get("/countries", async (req, res) => {
  try {
    const countries = await MealModel.aggregate([
      {
        $group: {
          _id: "$strArea",
          strAreaCode: { $first: "$strAreaCode" },
        },
      },
      {
        $project: {
          _id: 0,
          strArea: "$_id",
          strAreaCode: 1,
        },
      },
      { $sort: { strArea: 1 } },
    ]);
    res.json(countries);
  } catch (error) {
    console.log("Error getting countries", error);
  }
});

router.get("/country/:strArea", async (req, res) => {
  try {
    const strArea = req.params.strArea;
    const meals = await MealModel.find({ strArea });
    if (meals.length > 0) {
      res.json(meals);
    } else {
      res.status(404).json({ msg: `There is no meal with country ${strArea}` });
    }
  } catch (error) {
    console.log("Error getting meals by country", error);
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
