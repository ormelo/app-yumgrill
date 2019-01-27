//import recipeIngredientsMasterJSON from '../json/recipeIngredientsMaster.json';
import recipeIngredientsMasterJSON from '../../../public/recipeContentUpdated.json';
import ingredientPricingMasterJSON from '../../../public/ingredientPricing.json';

class RecipePricing {
	getPrice(item) {
		debugger;
		const ingredients = recipeIngredientsMasterJSON[item];
		let price = 0;
		const profit = 0;

		ingredients.forEach((ingredient) => {
			if (typeof ingredient.item !== 'undefined') {
					const item = ingredient.item;
					const qty = ingredient.qty;
					const unit = ingredient.unit;
					let totalPriceForRequiredQty = ingredientPricingMasterJSON[ingredient.item] 
						?(ingredientPricingMasterJSON[ingredient.item].standardUnitPrice * qty) / 10 : 0;
					price += totalPriceForRequiredQty;
					console.log('--Price afer adding '+ingredient.item+'--: '+ totalPriceForRequiredQty);
				} else {
					let totalPriceForRequiredQty = parseInt(ingredient.price, 10);
					price = parseInt(ingredient.price, 10);
					console.log('--Price afer adding item--: '+ totalPriceForRequiredQty);
				}
		})
		console.log('Price before profit: ', price);
			price = price + (price * profit);
			console.log('Price after profit: ', price);
		return price;
	}
}

export default RecipePricing;