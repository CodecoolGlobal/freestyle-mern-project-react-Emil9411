# Recipe site documentation

## Table of contents
- [Introduction](#introduction)
- [Usage](#usage)
- [API](#api)

## Introduction
This recipe site is a simple web application that allows users to search for recipes based on the recipe's name, category, or country of origin. Users can also add recipes to their favorites list and view them later. There is also a feature that allows users to calculate the measurements of ingredients from imperial to metric units.

## Usage
To use the recipe site, simply navigate to the all recipes page and search for a recipe by name. You can also filter recipes by category, using the dropdown menus, or by country of origin, if you know the country of origin of the recipe. Once you find a recipe you like, you can click on the recipe to view more details. If you are a logged in user, you can also add the recipe to your favorites list, and you can also remove it. On the recipe card, you can also click on the "Change measurement" button, and a modal will pop up that allows you to change the measurements from imperial to metric units, and vice versa. At the profile page, you can view your favorite recipes and remove them from your favorites list. You can also change your username, password, or email address.

## API
The API for the recipe site is a RESTful API that allows users to interact with the database. The API has the following endpoints:

### Meals
- `/api/v1/meals/` - GET: Get all meals
- `/api/v1/meals/:id` - GET: Get meal by id
- `/api/v1/category/:category` - GET: Get meals by category
- `/api/v1/countries/` - GET: Get all countries
- `/api/v1/country/:country` - GET: Get meals by country
- `/api/v1/` - POST: Add a new meal

### Users
- `/user/user/:id` - GET: Get user by id
- `/user/login/` - POST: Login user
- `/user/register/` - POST: Register user
- `/user/add-to-favorites/` - PATCH: Add meal to favorites
- `/user/remove-from-favorites/` - PATCH: Remove meal from favorites
- `/user/update-user/:id` - PATCH: Update user