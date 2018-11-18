var recipeContentUpdated = require ('../../../public/recipeContentUpdated.json');
var ingredientPricing = require ('../../../public/ingredientPricing.json');

class IngredientsRecommender {
	getAllIngredients(json) {
		var finalJson = {};
		var allIngredients = {};
		var ingredientsByRecipe = {};
		var recipeJson = JSON.parse(json);

		recipeJson.items.forEach(function(recipe) {
			var recipeKey = recipe.split(':')[0].trim().replace(/ /gi,'_');
			var ingredients = recipeContentUpdated[recipeKey];
			console.log(`Recipe: ${recipeKey}, Ingredients: `, ingredients);

			for(var i in ingredients) {
				console.log('i: ', ingredients[i]);
				var actualPrice = ingredientPricing[ingredients[i].item] ? (ingredientPricing[ingredients[i].item].standardUnitPrice * parseInt(ingredients[i].qty,10) * parseInt(recipeJson.members, 10)) / 10 : 0;
				if(typeof allIngredients[ingredients[i].item] === 'undefined') {
					allIngredients[ingredients[i].item] = {qty: parseInt(ingredients[i].qty,10) * parseInt(recipeJson.members, 10), unit: ingredients[i].unit, price: actualPrice};
				} else {
					allIngredients[ingredients[i].item].qty = allIngredients[ingredients[i].item].qty + parseInt(ingredients[i].qty, 10) * parseInt(recipeJson.members, 10);
					allIngredients[ingredients[i].item].price = allIngredients[ingredients[i].item].price + actualPrice;
				}
			}
			ingredientsByRecipe[recipeKey] = ingredients;

		});
		console.log('----mem:---', recipeJson.members);
		finalJson.allIngredients = allIngredients;
		finalJson.ingredientsByRecipe = ingredientsByRecipe;
		finalJson.members = recipeJson.members;
		return finalJson;
	}
}

module.exports = IngredientsRecommender;