import express from "express";
import MealModel from "../db/meal.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const meals = await MealModel.find().sort({ strMeal: 1 });
    res.json(
      meals.map((meal) => {
        return {
          idMeal: meal.idMeal,
          name: meal.strMeal,
          strCategory: meal.strCategory,
          strArea: meal.strArea,
          strInstructions: meal.strInstructions,
          strMealThumb: meal.strMealThumb,
          strTags: meal.strTags,
          strYoutube: meal.strYoutube,
          strIngredient1: meal.strIngredient1,
          strIngredient2: meal.strIngredient2,
          strIngredient3: meal.strIngredient3,
          strIngredient4: meal.strIngredient4,
          strIngredient5: meal.strIngredient5,
          strIngredient6: meal.strIngredient6,
          strIngredient7: meal.strIngredient7,
          strIngredient8: meal.strIngredient8,
          strIngredient9: meal.strIngredient9,
          strIngredient10: meal.strIngredient10,
          strIngredient11: meal.strIngredient11,
          strIngredient12: meal.strIngredient12,
          strIngredient13: meal.strIngredient13,
          strIngredient14: meal.strIngredient14,
          strIngredient15: meal.strIngredient15,
          strIngredient16: meal.strIngredient16,
          strIngredient17: meal.strIngredient17,
          strIngredient18: meal.strIngredient18,
          strIngredient19: meal.strIngredient19,
          strIngredient20: meal.strIngredient20,
          strMeasure1: meal.strMeasure1,
          strMeasure2: meal.strMeasure2,
          strMeasure3: meal.strMeasure3,
          strMeasure4: meal.strMeasure4,
          strMeasure5: meal.strMeasure5,
          strMeasure6: meal.strMeasure6,
          strMeasure7: meal.strMeasure7,
          strMeasure8: meal.strMeasure8,
          strMeasure9: meal.strMeasure9,
          strMeasure10: meal.strMeasure10,
          strMeasure11: meal.strMeasure11,
          strMeasure12: meal.strMeasure12,
          strMeasure13: meal.strMeasure13,
          strMeasure14: meal.strMeasure14,
          strMeasure15: meal.strMeasure15,
          strMeasure16: meal.strMeasure16,
          strMeasure17: meal.strMeasure17,
          strMeasure18: meal.strMeasure18,
          strMeasure19: meal.strMeasure19,
          strMeasure20: meal.strMeasure20,
          strSource: meal.strSource,
        };
      })
    );
  } catch (error) {
    console.log("Error in get all meals", error);
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
