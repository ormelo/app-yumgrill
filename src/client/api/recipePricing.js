import recipeIngredientsMasterJSON from '../json/recipeIngredientsMaster.json';
import ingredientPricingMasterJSON from '../../../public/ingredientPricing.json';

class RecipePricing {
	getPrice(item) {
		const ingredients = recipeIngredientsMasterJSON[item];
		let price = 0;
		ingredients.forEach((ingredient) => {
			if (ingredient.item) {
				const item = ingredient.item;
				const qty = ingredient.qty;
				const unit = ingredient.unit;
				const profit = 1;
				let totalPriceForRequiredQty = (ingredientPricingMasterJSON[ingredient.item].standardUnitPrice * qty) / 10;
				totalPriceForRequiredQty = totalPriceForRequiredQty + (totalPriceForRequiredQty * profit);
				price += totalPriceForRequiredQty;
				console.log('--Price of '+ingredient.item+'--: ', ingredientPricingMasterJSON[ingredient.item].standardUnitPrice);
			}
		})
		return price;
	}
}

export default RecipePricing;