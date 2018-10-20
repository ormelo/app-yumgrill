var recipeContentInput = require ('../json/recipeContentInput.json');
var https = require('https');
var fs = require('fs');
var updateJsonFile = require('update-json-file')
var filePath = 'public/recipeContent.json';
var Xray = require('x-ray');
var updateJsonFile = require('update-json-file')
var filePath = 'public/recipeContent.json'
var recipeContentConvertedPath = 'public/recipeContentConverted.json'

function evalCustom(exprn) {
	var expression = exprn.replace(/negligible/ig,'');
	var val = 0;
	try { val = eval(expression); }catch(e){ val = 0; }
	return val;
}

function getPricePerStandardQty(priceVal, qty) {

	return '';
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function getTargetMeasurement(category) {
	var unit = 'unknown';
	switch(category) {
		case 'Flour': unit = 'gm'; break;
		case 'Fresh Vegetables': unit = 'gm'; break;
		case 'Paneer': unit = 'gm'; break;
		case 'Curd': unit = 'ml'; break;
		case 'Masala': unit = 'gm'; break;
		case 'Whole Spice': unit = 'gm'; break;
		case 'Vinegar': unit = 'ml'; break;
		case 'Hair Oil': unit = 'ml'; break;
		case 'Sauce': unit = 'ml'; break;
		default: unit = 'gm'; break;
	}
	return unit;
}

function convertIngredients() {
	var recipeContentOutput = JSON.parse(fs.readFileSync('public/recipeContent.json', 'utf8'));
	
	for(var key in recipeContentOutput) {
		recipeContentOutput[key].ingredients.forEach(function(ingredient){
			console.log('---ing---', ingredient);
			var qty;
			var orig_qty = ingredient;
			if(ingredient.split('cup')[0] !== ingredient) {

							qty = ingredient.split('cup')[0] + 'cup';
							item = ingredient.split('cup')[1];
						} else if (ingredient.split('tbsp')[0] !== ingredient) {

							qty = ingredient.split('tbsp')[0] + 'tbsp';
							item = ingredient.split('tbsp')[1];
						} else if (ingredient.split('tsp')[0] !== ingredient) {

							qty = ingredient.split('tsp')[0] + 'tsp';
							item = ingredient.split('tsp')[1];
						} else if (ingredient.split('pcs')[0] !== ingredient) {

							qty = ingredient.split('pcs')[0] + 'pcs';
							item = ingredient.split('pcs')[1];
						} else {
							qty = 'unknown';
							item = ingredient;
						}
						//qty = convert(item, catrgory, qty);
						var httpData = '';
						var itemName = item;
						itemName = itemName.split(',')[0];
						itemName = itemName.trim().replace(/ /g,'-');
						var recipeName = key;

					https.get("https://www.zopnow.com/"+itemName+"-s.json", function(resp){
					      resp.on('data', function(chunk){
					        httpData += chunk;
					      });
					      resp.on('end', function(chunk){
					      	console.log('url: https://www.zopnow.com/'+itemName+'-s.json');
					      	var category = JSON.parse(httpData)[1]['data'].products[0] !== undefined ?
					      	JSON.parse(httpData)[1]['data'].products[0].category.name : {full_name:"",mrp:""};
					        console.log('---category of '+itemName+'--', category);
					        var options = { defaultValue: {} };
					        updateJsonFile(recipeContentConvertedPath, (data) => {
					        	  var unit = '';
					        	  switch(getTargetMeasurement(category)) {
					        	  	case 'gm': if (qty.includes('cup')) {
					        	  					if(category == 'Flour') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/cup/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 120 * qty + '';
					        	  					} else if(category == 'Fresh Vegetables') {
					        	  						if(qty.trim().includes(' ')) { //eg 1 1/2
					        	  							console.log('---Fraction Prev---'+qty.trim()+'')
					        	  							qty = qty.trim().replace(/cup/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  							console.log('---Fraction---'+qty);
					        	  						}
					        	  						qty = 150 * qty + '';
					        	  					} else if(category == 'Paneer') {
					        	  						if(qty.trim().includes(' ')) { //eg 1 1/2
					        	  							console.log('---Fraction Prev---'+qty.trim()+'')
					        	  							qty = qty.trim().replace(/cup/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  							console.log('---Fraction---'+qty);
					        	  						}
					        	  						qty = 150 * qty + '';
					        	  					} 
					        	  			   }
					        	  			   else if (qty.includes('tsp')) {
					        	  					if(category == 'Masala' || category =='Whole Spice') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 2.7 * qty + '';
					        	  					} else if(category == 'Flour') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 6 * qty + '';

					        	  					} else if(category == 'Fresh Vegetables') {
					        	  						if(qty.trim().includes(' ')) { //eg 1 1/2
					        	  							console.log('---Fraction Prev---'+qty.trim()+'')
					        	  							qty = qty.trim().replace(/tsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  							console.log('---Fraction---'+qty);
					        	  						}
					        	  						qty = 25 * qty + '';
					        	  					} else {
					        	  						if(qty.trim().includes(' ')) { //eg 1 1/2
					        	  							console.log('---Fraction Prev---'+qty.trim()+'')
					        	  							qty = qty.trim().replace(/tsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  							console.log('---Fraction---'+qty);
					        	  						}
					        	  						qty = 2.7 * qty + '';
					        	  					}
					        	  			   } else if (qty.includes('tbsp')) {
					        	  					if(category == 'Masala' || category =='Whole Spice') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tbsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 10 * qty + '';
					        	  					} else if(category == 'Flour') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tbsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 10 * qty + '';

					        	  					} else if(category == 'Fresh Vegetables') {
					        	  						if(qty.trim().includes(' ')) { //eg 1 1/2
					        	  							console.log('---Fraction Prev---'+qty.trim()+'')
					        	  							qty = qty.trim().replace(/tbsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  							console.log('---Fraction---'+qty);
					        	  						}
					        	  						qty = 10 * qty + '';
					        	  					} 
					        	  			   }
					        	  			   unit = 'gm';
					        	  			   break;
					        	  	case 'ml': if(qty.includes('cup')) {
					        	  					if(category == 'Curd') {
					        	  						qty = 150 * evalCustom(qty.trim().replace(/cup/gi,''),10) + '';
					        	  					}
					        	  				}
					        	  				else if (qty.includes('tsp')) {
					        	  					if(category =='Sauce' || category =='Vinegar' || category =='Hair oil') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 3.7 * qty + '';
					        	  					}
					        	  			   } else if (qty.includes('tbsp')) {
					        	  					if(category =='Sauce' || category =='Vinegar' || category =='Hair Oil') {
					        	  						if(qty.trim().includes(' ')) {
					        	  							qty = qty.trim().replace(/tbsp/gi,'');
					        	  							qty = qty.trim().replace(/ /g, '+');
					        	  							qty = evalCustom(qty);
					        	  						}
					        	  						qty = 15 * qty + '';
					        	  					} 					        	  			   }
					        	  				unit = 'ml';
					        	  				break;
					        	  	default: 
					        	  }
								  //data[obj.item] = {standardUnitPrice: price, mrp: variant.mrp, qty: qty, name: variant.full_name, url: variant.url};
								  if(typeof data[recipeName] === 'undefined') {
								  	data[recipeName] = [];
								  } else {
								  	data[recipeName].push({item: itemName, qty: qty, unit: unit});
								  }

								  return data;
								}, options);
					      });
					    }).on("error", function(e){
					      console.log("Got error: " + e.message);
					    });
		});
	}
}

var recipeContent = {};
var recipeInputLength = 0;
var recipeOutputLength = 0;
var fetchComplete = false;

function checkProgress() {
		while(!fetchComplete) {
			
				console.log('--recipeInputLength--', recipeInputLength);
				console.log('--recipeOutputLength--', recipeOutputLength);
				var options = { defaultValue: {} };
				if(recipeOutputLength === recipeInputLength) {
					fetchComplete = true;
					recipeContent = JSON.stringify(recipeContent);
					fs.writeFile("public/recipeContent.json", recipeContent, 'utf8', function (err) {
					    if (err) {
					        console.log("An error occured while writing JSON Object to File.");
					        return console.log(err);
					    }
					 
					    console.log("JSON file has been saved.");
					    convertIngredients();
					});
				}
		}
	};

var IngredientsGenerator = function() {
	this.recipeContent = {};

	this.init = function() {

		setTimeout(function(){checkProgress();}, 10000);

		recipeInputLength = Object.keys(recipeContentInput).length;
		console.log('---IngredientsGenerator---', recipeContentInput);

		for (var key in recipeContentInput) {
			console.log('--key--', key);
			var x = Xray();
			var item = recipeContentInput[key];
			var recipeUrl = item.url;
			var recipeName = key;
			var ingredients = [];
			var options = { defaultValue: {} };
			recipeContent[recipeName] = {};

			(function(recipeName) { x(recipeUrl, ['#rcpinglist > h2 > span']).then(
				function(data) {
					console.log('--recipeData--', data);
					console.log('--recipeName--', recipeName);
					var ingredientsData = data;
					ingredients = data;
					recipeOutputLength++;
					recipeContent[recipeName]['ingredients'] = ingredients;
					console.log('---Object.keys(recipeContent).length---', Object.keys(recipeContent).length);
					console.log('this.recipeContent ', recipeContent);
					return;
				}) })(recipeName);




			
		}
	};
}
module.exports = IngredientsGenerator;
