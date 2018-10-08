var recipeContentInput = require ('../json/recipeContentInput.json');
var https = require('https');
var updateJsonFile = require('update-json-file')
var filePath = 'public/recipeContent.json';
var Xray = require('x-ray');
var updateJsonFile = require('update-json-file')
var filePath = 'public/recipeContent.json'

function getPricePerStandardQty(priceVal, qty) {

	return '';
}

var IngredientsGenerator = function() {
	this.init = function() {
		console.log('---IngredientsGenerator---', recipeContentInput);

		for (var key in recipeContentInput) {
			console.log('--key--', key);
			var x = Xray();
			var item = recipeContentInput[key];
			var recipeUrl = item.url;
			var recipeName = key;
			var ingredients = [];
			var options = { defaultValue: {} };

			(function(recipeName) { x(recipeUrl, ['#rcpinglist > h2 > span'])(
				function(err, data) {
					console.log('--recipeData--', data);
					console.log('--recipeName--', recipeName);
					var ingredientsData = data;
					ingredients = data;
					updateJsonFile(filePath, (data) => {
						        	  data[recipeName] = {ingredients: ingredients};
									  return data;
									}, options);
					return;
				}) })(recipeName);
		}
	};
}
module.exports = IngredientsGenerator;
