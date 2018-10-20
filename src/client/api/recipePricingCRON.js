//var recipeIngredientsMasterJSON = require ('../json/recipeIngredientsMaster.json');
var recipeIngredientsMasterJSON = require ('../../../public/recipeContentUpdated.json');

var ingredientPricingMasterJSON = require('../json/ingredientPricingMaster.json');
var ingredientBrandPreference = require('../json/ingredientBrandPreference.json');
var schedule = require('node-schedule');
var https = require('https');
var updateJsonFile = require('update-json-file')
var filePath = 'public/ingredientPricing.json'

function getPricePerStandardQty(priceVal, qty) {
	var qtyType = 'unknown';
	var price = 0;

	if(qty.indexOf(' g') !== -1) {
		qtyType = 'g';
	} else if(qty.indexOf(' Kg') !== -1) {
		qtyType = 'Kg';
	} else if(qty.indexOf(' Ltr') !== -1) {
		qtyType = 'Ltr';
	} else if(qty.indexOf(' ml') !== -1) {
		qtyType = 'ml';
	} 

	  console.log('------------------------');
	  console.log('--qtyType--', qtyType);


	switch(qtyType) {
		case 'g': var gramVal = parseInt(qty.replace(/ g/g,''), 10);
				price = priceVal * 10 / gramVal;
				break;
		case 'Kg': var kgVal = parseInt(qty.replace(/ g/g,''), 10);
				price = priceVal * 10 / 1000;
				break;
		case 'Ltr': var ltrVal = parseInt(qty.replace(/ g/g,''), 10);
				price = priceVal * 10 / 1000;
				break;
		case 'ml': var mlVal = parseInt(qty.replace(/ g/g,''), 10);
				price = priceVal * 10 / mlVal;
				break;
		default: price = 0;
				break;
	}

	  console.log('--price--', price);
	  console.log('------------------------');

	return price;
}

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
					        	  var price = variant.mrp;
					        	  var qty = variant.properties.Quantity;
					        	  console.log('------------------------');
					        	  console.log('--itemName--', itemName);
					        	  console.log('--price--', price);
					        	  console.log('--qty--', qty);
					        	  console.log('------------------------');
					        	  
					        	  price = getPricePerStandardQty(price,qty);
								  data[obj.item] = {standardUnitPrice: price, mrp: variant.mrp, qty: qty, name: variant.full_name, url: variant.url};
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
