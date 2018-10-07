var recipeIngredientsMasterJSON = require ('../json/recipeIngredientsMaster.json');
var ingredientPricingMasterJSON = require('../json/ingredientPricingMaster.json');
var ingredientBrandPreference = require('../json/ingredientBrandPreference.json');
var schedule = require('node-schedule');
var https = require('https');
var updateJsonFile = require('update-json-file')
var filePath = 'public/ingredientPricing.json'

var RecipePricingCRON = function() {
	this.init = function() {
		//var j = schedule.scheduleJob('10 * * * *', this.fetch);
		setTimeout(this.fetch, 0);
	};

	this.fetch = function() {
		console.log('--13--',recipeIngredientsMasterJSON);
		for (var key in recipeIngredientsMasterJSON) {
			var itemArr = recipeIngredientsMasterJSON[key];
			itemArr.forEach(function(obj){
				var itemName = obj.item;
				var httpData = '';
				console.log('--19--', itemName);
				
				if(itemName !== undefined) {
					if(ingredientBrandPreference[itemName] !== undefined) {
						itemName = ingredientBrandPreference[itemName] + '-' + itemName;
					}
					itemName = itemName.replace(/_/g,'-');
					https.get("https://www.zopnow.com/"+itemName+"-s.json", function(resp){
					      resp.on('data', function(chunk){
					        httpData += chunk;
					      });
					      resp.on('end', function(chunk){
					      	var variant = JSON.parse(httpData)[1]['data'].products[0] !== undefined ?
					      	JSON.parse(httpData)[1]['data'].products[0].variants[0] : {full_name:"",mrp:""};
					        console.log('---mrp of '+itemName+'--', variant.mrp);
					        var options = { defaultValue: {} };
					        updateJsonFile(filePath, (data) => {
								  data[obj.item] = variant.mrp;
								  return data;
								}, options);
					      });
					    }).on("error", function(e){
					      console.log("Got error: " + e.message);
					    });
				}
			});
		}
	}
}
module.exports = RecipePricingCRON;
