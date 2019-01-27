import React, { Component } from 'react';
import { render } from 'react-dom';
import RecipePricing from '../api/recipePricing.js';
// Import routing components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.dateChange = this.dateChange.bind(this);
      this.setMealType = this.setMealType.bind(this);
      this.setMenu = this.setMenu.bind(this);
      this.showMore = this.showMore.bind(this);
      this.state = {dateVal: '2018-11-20', members: ''};
    }
    setMenu(i) {
      localStorage.setItem('order','{"items":"'+i+'""}');
    }
    showMore(e,i) {
      var dots = document.getElementById("dots"+i);
      var moreText = document.getElementById("more"+i);
      var btnText = document.getElementById("myBtn"+i);

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }
    dateChange(e) {
      this.setState({dateVal: e.target.value});
      localStorage.setItem('order-date', e.target.value);
    }
    setMealType(e) {
      let mealType = document.getElementById('selectMealType').options[document.getElementById('selectMealType').selectedIndex].value;
      localStorage.setItem('order-meal', mealType);
    }
    componentDidMount() {
      this.setState({members: localStorage.getItem('members') || '35'});
      localStorage.setItem('cuisine','North/South');
      //var nlform = new NLForm( document.getElementById( 'nl-form' ));
    }
    render(){
        return (<div>
                  <div className="description main clearfix">
                    <div className="card" style={{marginTop: '0px'}}>
                      <h2>North Special Thali - ₹250</h2>
                      <img src="./sc/menu1.png" style={{padding:'10px'}}/>
                      <p>Veg manchurian, Potato wedges, Butter Nan - 2 pcs<span id="dots1">...</span><span id="more1">, Capcicum masala, Dal makhani, Peas Pulao - with raitha, Veg salad, Cashew burfi</span></p>
                      <button onClick={(e)=>{this.showMore(e,1);}} id="myBtn1" className="read-more">Read more</button>
                      <Link className="btn" to="/quoteChecker/step3" onClick={(e)=>{this.setMenu('1');}}><span>Book free sample</span></Link>
                    </div>

                    <div className="card">
                      <h2>North Deluxe Thali - ₹225</h2>
                      <img src="./sc/menu2.png" style={{padding:'10px'}}/>
                      <p>Spring rolls, Gobi chilli, Mix veg poriyal<span id="dots2">...</span><span id="more2">, Plain Roti - 2 pcs, Mix veg curry, Plain steamed rice, Veg salad, Gulab Jamoon</span></p>
                      <button onClick={(e)=>{this.showMore(e,2);}} id="myBtn2" className="read-more">Read more</button>
                      <Link className="btn" to="/quoteChecker/step3" onClick={(e)=>{this.setMenu('2');}}><span>Book free sample</span></Link>
                    </div>

                    <div className="card">
                      <h2>South Special Thali - ₹205</h2>
                      <img src="./sc/menu3.png" style={{padding:'10px'}}/>
                      <p>Veg manchurian, Tovve/parupu, Cucumber kosambri<span id="dots3">...</span><span id="more3">, Chapati - large 3 pcs, Green-leaf sambar, Plain steamed rice, Roasted Papad, Veg salad, Gulab jamoon</span></p>
                      <button onClick={(e)=>{this.showMore(e,3);}} id="myBtn3" className="read-more">Read more</button>
                      <Link className="btn" to="/quoteChecker/step3" onClick={(e)=>{this.setMenu('3');}}><span>Book free sample</span></Link>
                    </div>

                    <div className="card">
                      <h2>Special Value Meal - ₹180</h2>
                      <img src="./sc/menu4.png" style={{padding:'10px'}}/>
                      <p>Gobi Manchurian, Tovve/parupu, Cucumber kosambri<span id="dots4">...</span><span id="more4">, Chapati - 2 pcs, Green-leaf sambar, Tomato rasam, Plain steamed rice, Veg salad, Gulab jamoon - 2 pcs</span></p>
                      <button onClick={(e)=>{this.showMore(e,4);}} id="myBtn4" className="read-more">Read more</button>
                      <Link className="btn" to="/quoteChecker/step3" onClick={(e)=>{this.setMenu('4');}}><span>Book free sample</span></Link>
                    </div>
                    <br/>
                  </div>
                  <div className="bc"><div className="button-container">
                    <center><span style={{fontSize: '20px'}}>Menu not to your taste?</span></center>
                    <Link to="/quoteChecker/step2" className="btn" style={{marginTop: '10px',marginBottom: '20px'}}><span>Customise your menu</span></Link>
                    <center><div style={{marginTop: '20px'}}>Questions? Call us at <a href="tel:+91-7619514999">+91-7619514999</a></div></center>
                  </div></div>
                </div>
          );
    }
}

class OnboardTitle extends Component {
    render(){
        return (<div>
                  <div className="logo"><img alt="Scoosh.in" src="./sc/logo.png"/></div>
                  <div className="headline">Popular Menus - veg only</div>
                  <hr className="line1" height="1px"/>
                  <hr className="line2" height="10px"/>
                </div>
          );
    }
}

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.selectCuisine = this.selectCuisine.bind(this);
  }

  componentDidMount() {
    /*var myKeyVals = {};
    myKeyVals.date = localStorage.getItem('order-date');
    myKeyVals.orderMeal = localStorage.getItem('order-meal');
    myKeyVals.members = localStorage.getItem('num-members');
    myKeyVals.email = localStorage.getItem('mobile');
      var saveData = $.ajax({
          type: 'POST',
          url: "/submitMealType",
          data: myKeyVals,
          dataType: "text",
          success: function(resultData) { console.log("Save Complete") }
      });*/
  }
  selectCuisine(cuisine) {
    if(cuisine == 'north')
      localStorage.setItem('cuisine', 'North Indian');
    else if(cuisine == 'south')
      localStorage.setItem('cuisine', 'South Indian');
    else if(cuisine == 'north_south')
      localStorage.setItem('cuisine', 'North/South');

    document.getElementById('north-checked').style.display = 'none';
    document.getElementById('south-checked').style.display = 'none';
    document.getElementById('north_south-checked').style.display = 'none';
    document.getElementById('north-img').style.opacity = '1';
    document.getElementById('south-img').style.opacity = '1';
    document.getElementById('north_south-img').style.opacity = '1';
    document.getElementById(`${cuisine}-img`).style.opacity = '0.2';
    document.getElementById(`${cuisine}-checked`).style.display = 'inline';
  }
    render(){
        return (<div className="content"><div className="select-cuisine">Select your cuisine</div><br/>
            <div id="recent-portfolio-list">
        
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mix">
                      <div className="portfolio-item-sm" onClick={()=>this.selectCuisine('north')}>
                          <div className="portfolio-img">
                              <a>
                                  <img id="north-img" src="/sc/m_north.jpg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
                                  <svg id="north-checked" className="checked" x="0px" y="0px" viewBox="0 0 488.878 488.878" style={{enableBackground:'new 0 0 488.878 488.878'}} width="512px" height="512px"><g><g><polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " fill="#0abc9a"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              </a>
                          </div>
                          <div className="portfolio-item-content" style={{padding: '10px !important'}}>
                              <h3 className="header">
                                  North Indian
                              </h3>
                              <p className="body"></p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mix">
                      <div className="portfolio-item-sm" onClick={()=>this.selectCuisine('south')}>
                          <div className="portfolio-img">
                              <a>
                                  <img id="south-img" src="/sc/m_south.jpg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
                                  <svg id="south-checked" className="checked" x="0px" y="0px" viewBox="0 0 488.878 488.878" style={{enableBackground:'new 0 0 488.878 488.878'}} width="512px" height="512px"><g><g><polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " fill="#0abc9a"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              </a>
                          </div>
                          <div className="portfolio-item-content">
                              <h3 className="header">
                                  South Indian
                              </h3>
                              <p className="body"></p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mix">
                      <div className="portfolio-item-sm" onClick={()=>this.selectCuisine('north_south')}>
                          <div className="portfolio-img">
                              <a>
                                  <img id="north_south-img" src="/sc/m_north_south.jpg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
                                  <svg id="north_south-checked" className="checked" x="0px" y="0px" viewBox="0 0 488.878 488.878" style={{enableBackground:'new 0 0 488.878 488.878'}} width="512px" height="512px"><g><g><polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " fill="#0abc9a"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              </a>
                          </div>
                          <div className="portfolio-item-content">
                              <h3 className="header">
                                  North/South Mixed
                              </h3>
                              <p className="body"></p>
                          </div>
                      </div>
                      <br/><br/><br/>
                  </div>
            </div>
            <div className="btn-parent">
              <Link to="/quoteChecker/step2" className="btn fixed-btn" style={{margin:'0 auto',zIndex:0}}>
                <span>Book free sample</span>
              </Link>
            </div>
          </div>
          );
    }
}

class OnboardStep1 extends Component {
    constructor(props) {
      super(props);
      this.getStarters = this.getStarters.bind(this);
      this.getMainCourse = this.getMainCourse.bind(this);
      this.getDrinks = this.getDrinks.bind(this);
      this.onCheckHandler = this.onCheckHandler.bind(this);
      this.onCheck = this.onCheck.bind(this);
      this.onUncheck = this.onUncheck.bind(this);
      this.renderItemPreview = this.renderItemPreview.bind(this);
      this.removePreview = this.removePreview.bind(this);
      this.onNextClick = this.onNextClick.bind(this);
      this.starters = [];
      this.mainCourse = [];
      this.desserts = [];
      this.drinks = [];
      this.state = {items:[], cuisine: localStorage.getItem('cuisine'), members: localStorage.getItem('members'), perPlatePrice: '0', lastAdded: '', priceForAllPlates: '0'};
      this.recipePricingAPI = new RecipePricing();
      this.northIndianMenu = {
        "paneer_tikka": {"price": "65", "imgUrl": "paneer_tikka.png"},
        "cheese_balls": {"price": "35", "imgUrl": "cheese_balls.png"},
        "spring_rolls": {"price": "25", "imgUrl": "spring_rolls.png"},
        "gobi_chilli": {"price": "35", "imgUrl": "gobi_chilli.png"},
        "gobi_manchurian": {"price": "35", "imgUrl": "gobi_manchurian.png"},
        "veg_manchurian": {"price": "70", "imgUrl": "baby_corn_manchurian.png"},
        "potato_wedges": {"price": "60", "imgUrl": "potato_wedges.png"},
        "aloo_tikki": {"price": "75", "imgUrl": "aloo_tikki.png"},
        "veg_cutlet": {"price": "75", "imgUrl": "veg_cutlet.png"},
        "plain_roti": {"price": "25", "imgUrl": "roti.png"},
        "butter_nan": {"price": "45", "imgUrl": "nan.png"},
        "plain_nan": {"price": "35", "imgUrl": "nan.png"},
        "garlic_nan": {"price": "40", "imgUrl": "nan.png"},
        "paneer_butter_masala": {"price": "90", "imgUrl": "paneer_butter_masala.png"},
        "capcicum_masala": {"price": "130", "imgUrl": "capcicum_masala.png"},
        "dal_makhani": {"price": "60", "imgUrl": "dal_makhani.png"},
        "navratan_korma": {"price": "120", "imgUrl": "navratan_korma.png"},
        "mix_veg_curry": {"price": "100", "imgUrl": "mix_veg_curry.png"},
        "dal_tadka": {"price": "80", "imgUrl": "dal_tadka.png"},
        "plain_rice": {"price": "35", "imgUrl": "rice.png"},
        "peas_pulao": {"price": "65", "imgUrl": "peas_pulao.png"},
        "veg_pulao": {"price": "85", "imgUrl": "veg_pulao.png"},
        "veg_biriyani": {"price": "105", "imgUrl": "veg_biriyani.png"},
        "fried_rice": {"price": "55", "imgUrl": "fried_rice.png"},
        "veg_salad": {"price": "20", "imgUrl": "veg_salad.png"},
        "sprout_salad": {"price": "30", "imgUrl": "sprout_salad.png"},
        "lemonade": {"price": "30", "imgUrl": "lemonade.png"},
        "masala_buttermilk": {"price": "30", "imgUrl": "masala_buttermilk.png"},
        "fruit_punch": {"price": "30", "imgUrl": "fruit_punch.png"},
        "orange_squash": {"price": "30", "imgUrl": "orange_juice.png"},
        "pineapple_squash": {"price": "30", "imgUrl": "pineapple_juice.png"},
        "gulab_jamoon": {"price": "35", "imgUrl": "gulab_jamoon.png"},
        "rasgulla": {"price": "55", "imgUrl": "rasgulla.png"},
        "coconut_burfi": {"price": "25", "imgUrl": "coconut_burfi.png"},
        "cashew_burfi": {"price": "35", "imgUrl": "cashew_burfi.png"}
      };

      this.southIndianMenu = {
        "cucumber_kosambari": {"price": "20", "imgUrl": "cucumber_kosambari.png"},
        "moong_dal_kosambari": {"price": "20", "imgUrl": "moong_dal_kosambari.png"},
        "mix_veg_poriyal": {"price": "35", "imgUrl": "mix_veg_poriyal.png"},
        "pumpkin_poriyal": {"price": "25", "imgUrl": "pumpkin_poriyal.png"},
        "beetroot_poriyal": {"price": "35", "imgUrl": "beetroot_poriyal.png"},
        "aloo_dry_poriyal": {"price": "35", "imgUrl": "aloo_dry_poriyal.png"},
        "snakeguard_poriyal": {"price": "70", "imgUrl": "snakeguard_poriyal.png"},
        "thove_parupu": {"price": "70", "imgUrl": "thove_parupu.png"},
        "masala_vada": {"price": "70", "imgUrl": "masala_vada.png"},
        "tondekai_poriyal": {"price": "60", "imgUrl": "tondekai_poriyal.png"},

        "chapati": {"price": "25", "imgUrl": "roti.png"},
        "poori": {"price": "45", "imgUrl": "poori.png"},

        "mix_veg_sagu": {"price": "90", "imgUrl": "sagu.png"},
        "veg_kurma": {"price": "60", "imgUrl": "kurma.png"},
        "tomato_gojju": {"price": "120", "imgUrl": "tomato_gojju.png"},
        "majjige_huli": {"price": "100", "imgUrl": "majjige_huli.png"},
        "green_leaf_sambar": {"price": "80", "imgUrl": "greenleaf_sambar.png"},
        "tomato_rasam": {"price": "80", "imgUrl": "rasam.png"},

        "plain_rice": {"price": "35", "imgUrl": "rice.png"},
        "peas_pulao": {"price": "65", "imgUrl": "peas_pulao.png"},
        "veg_pulao": {"price": "85", "imgUrl": "veg_pulao.png"},
        "veg_biriyani": {"price": "105", "imgUrl": "veg_biriyani.png"},
        "puliyogare": {"price": "55", "imgUrl": "puliyogare.png"},
        "veg_salad": {"price": "20", "imgUrl": "veg_salad.png"},
        "sprout_salad": {"price": "30", "imgUrl": "sprout_salad.png"},
        "lemonade": {"price": "30", "imgUrl": "lemonade.png"},
        "masala_buttermilk": {"price": "30", "imgUrl": "masala_buttermilk.png"},
        "gulab_jamoon": {"price": "35", "imgUrl": "gulab_jamoon.png"},
        "rasmalai": {"price": "55", "imgUrl": "rasmalai.png"},
        "coconut_burfi": {"price": "25", "imgUrl": "coconut_burfi.png"},
        "cashew_burfi": {"price": "35", "imgUrl": "cashew_burfi.png"}
      };

      this.northSouthMenu = Object.assign({}, this.northIndianMenu, this.southIndianMenu);

      this.menuType = this.northIndianMenu;
      if(localStorage.getItem('cuisine') === 'South Indian') {
        this.menuType = this.southIndianMenu;
      } else if(localStorage.getItem('cuisine') === 'North/South') {
        this.menuType = this.northSouthMenu;
      }
      
    }
    componentDidMount() {
      $(window).scrollTop(0);
      var myKeyVals = {};
      myKeyVals.date = localStorage.getItem('order-date');
      myKeyVals.orderMeal = localStorage.getItem('order-meal');
      myKeyVals.members = localStorage.getItem('members');
      myKeyVals.email = localStorage.getItem('mobile');
      myKeyVals.cuisine = localStorage.getItem('cuisine');
        var saveData = $.ajax({
            type: 'POST',
            url: "/submitCuisine",
            data: myKeyVals,
            dataType: "text",
            success: function(resultData) { console.log("Save Complete") }
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('state updated:', nextState);

      let orderObj = nextState;
       if(orderObj.lastAdded.includes('Last removed:')) {
          let itemTobeRemoved = orderObj.lastAdded.split('Last removed: ')[1];
          orderObj.items.splice( orderObj.items.indexOf(itemTobeRemoved), 1 );
       }
       console.log('--orderObj--', orderObj);
      orderObj.date = localStorage.getItem('order-date');
      orderObj.mealType = localStorage.getItem('order-meal');
      localStorage.setItem('order', JSON.stringify(orderObj));
      var myKeyVals = {};
      myKeyVals.email = localStorage.getItem('mobile');
      myKeyVals.members = JSON.stringify(orderObj);
        var saveData = $.ajax({
            type: 'POST',
            url: "/submitItemChange",
            data: myKeyVals,
            dataType: "text",
            success: function(resultData) { console.log("Save Complete") }
        });
      return true;
    }
    onNextClick() {
      document.getElementById('email').value = localStorage.getItem('mobile');
      document.getElementById('members').value = localStorage.getItem('order');
      document.getElementById('slotForm').submit();
    }
    renderItemPreview(itemType, imgUrl) {
    console.log('itemType: ', itemType);
      if (itemType == 'starter') {
        if(!document.getElementById('starter-item-1').src.includes('.png')) {
          document.getElementById('starter-item-1').src = imgUrl;
        } else if(!document.getElementById('starter-item-2').src.includes('.png')) {
          document.getElementById('starter-item-2').src = imgUrl;
        } else if(!document.getElementById('starter-item-3').src.includes('.png')) {
          document.getElementById('starter-item-3').src = imgUrl;
        } else if(!document.getElementById('starter-item-4').src.includes('.png')) {
          document.getElementById('starter-item-4').src = imgUrl;
        }
      } else if(itemType == 'main-course') {
        if(!document.getElementById('main-course-item-1').src.includes('.png')) {
          document.getElementById('main-course-item-1').src = imgUrl;
        }
      } else if (itemType == 'side-dish') {
        if(!document.getElementById('side-dish-item-1').src.includes('.png')) {
          document.getElementById('side-dish-item-1').src = imgUrl;
        } else if(!document.getElementById('side-dish-item-2').src.includes('.png')) {
          document.getElementById('side-dish-item-2').src = imgUrl;
        }
      } else if (itemType == 'rice-item') {
        if(!document.getElementById('rice-item-1').src.includes('.png')) {
          document.getElementById('rice-item-1').src = imgUrl;
        }
      } else if (itemType == 'salad-item') {
        if(!document.getElementById('salad-item-1').src.includes('.png')) {
          document.getElementById('salad-item-1').src = imgUrl;
        } 
      } else if (itemType == 'dessert') {
        if(!document.getElementById('dessert-item-1').src.includes('.png')) {
          document.getElementById('dessert-item-1').src = imgUrl;
        } 
      } else if (itemType == 'drink') {
        if(!document.getElementById('drink-item-1').src.includes('.png')) {
          document.getElementById('drink-item-1').src = imgUrl;
        } 
      }
    }
    removePreview(item) {
      document.querySelectorAll('.meal-item').forEach(function(obj){if(obj.src.includes(item)) obj.src="";});
    }
    onCheck(itemType, item) {
      let itemTypeChecked = 0;
      document.querySelectorAll('input[data-item-type="'+itemType+'"]').forEach(function(obj) {
        if(obj.checked) {
          itemTypeChecked++;
        }
      });

      if(itemType == 'starter') {
        console.log('itemTypeChecked:', itemTypeChecked);
        if(itemTypeChecked == 5) {
          alert('Only a maximum of 4 starters allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
        this.starters.push(item);
      } else if(itemType == 'main-course') {
        if(itemTypeChecked == 2) {
          alert('Only a maximum of 1 roti/naan type allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
        this.mainCourse.push(item);
      } else if(itemType == 'side-dish') {
        if(itemTypeChecked == 3) {
          alert('Only a maximum of 2 side dish allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
      } else if(itemType == 'rice-item') {
        if(itemTypeChecked == 2) {
          alert('Only a maximum of 1 rice item allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
      } else if(itemType == 'salad-item') {
        if(itemTypeChecked == 2) {
          alert('Only a maximum of 1 salad allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
      } else if(itemType == 'dessert') {
        if(itemTypeChecked == 2) {
          alert('Only a maximum of 1 dessert allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
        this.desserts.push(item);
      } else if(itemType == 'drink') {
        if(itemTypeChecked == 2) {
          alert('Only a maximum of 1 drink allowed.');
          document.querySelector('input[data-item="'+item+'"]').checked = false;
          return false;
        }
        this.drinks.push(item);
      }
      // alert(item);
      console.log(this.recipePricingAPI);
      let price = this.recipePricingAPI.getPrice(item);
      price = Math.ceil(price/5)*5;
      let perPlatePriceVal = parseInt(this.state.perPlatePrice, 10) + price;
      let priceForAllPlatesVal = perPlatePriceVal * parseInt(localStorage.getItem('members'));
      let lastAddedVal = 'Last added: '+item.replace(/_/g, ' ')+': ₹'+price;
      let items = this.state.items;
      items.push(item.replace(/_/g, ' ')+': ₹'+price);
      this.setState({items});
      this.setState({lastAdded: lastAddedVal, perPlatePrice: perPlatePriceVal, priceForAllPlates: priceForAllPlatesVal});
      this.renderItemPreview(itemType, '/sc/items/'+this.menuType[item].imgUrl);
    }
    onUncheck(itemType, item) {
      let price = this.recipePricingAPI.getPrice(item);
      price = Math.ceil(price/5)*5;
      let perPlatePriceVal = parseInt(this.state.perPlatePrice, 10) - price;
      let lastAddedVal = 'Last removed: '+item.replace(/_/g, ' ')+': ₹'+price;
      let priceForAllPlatesVal = perPlatePriceVal * parseInt(localStorage.getItem('members'));
      this.setState({lastAdded: lastAddedVal, perPlatePrice: perPlatePriceVal, priceForAllPlates: priceForAllPlatesVal});
      this.removePreview(this.menuType[item].imgUrl);


    }
    onCheckHandler(e) {
       console.log(e.target.checked);
       const itemType = e.target.getAttribute('data-item-type');
       const item = e.target.getAttribute('data-item');
       console.log(itemType);
       console.log(item);
       if (e.target.checked) {
          this.onCheck(itemType, item);
       } else {
          this.onUncheck(itemType, item);
       }
    }
    createCheckBox(type, item, label) {
      return <div className="checkbox"><label><input type="checkbox" data-item-type={type} data-item={item}
        onClick={(e)=>{this.onCheckHandler(e)}}/><i className="input-helper"></i>
        <span>{label}</span></label></div>;
    }
    getStarters(){
      let startersElems = null;
      switch(localStorage.getItem('cuisine')) {
        case 'North Indian': startersElems = <div className="box">
                                                {this.createCheckBox('starter', 'paneer_tikka', 'Paneer Tikka (5 pieces)')}
                                                {this.createCheckBox('starter', 'cheese_balls', 'Potato cheese balls (4 pieces)')}
                                                {this.createCheckBox('starter', 'spring_rolls', 'Spring rolls (4 pieces)')}
                                                {this.createCheckBox('starter', 'gobi_chilli', 'Gobi chilli')}
                                                {this.createCheckBox('starter', 'gobi_manchurian', 'Gobi manchurian')}
                                                {this.createCheckBox('starter', 'veg_manchurian', 'Veg manchurian')}
                                                {this.createCheckBox('starter', 'potato_wedges', 'Potato wedges (5 pieces)')}
                                                {this.createCheckBox('starter', 'aloo_tikki', 'Aloo Tikki (4 pieces)')}
                                                {this.createCheckBox('starter', 'veg_cutlet', 'Mix veg cutlet (2 pieces)')}
                                            </div>; break;
        case 'South Indian': startersElems = <div className="box">
                                                {this.createCheckBox('starter', 'thove_parupu', 'Tovve/parupu')}
                                                {this.createCheckBox('starter', 'cucumber_kosambari', 'Cucumber kosambri')}
                                                {this.createCheckBox('starter', 'moong_dal_kosambari', 'Moong dal kosambri')}
                                                {this.createCheckBox('starter', 'masala_vada', 'Masala vada')}
                                                {this.createCheckBox('starter', 'mix_veg_poriyal', 'Mix veg poriyal')}
                                                {this.createCheckBox('starter', 'pumpkin_poriyal', 'Pumpkin poriyal')}
                                                {this.createCheckBox('starter', 'beetroot_poriyal', 'Beetroot poriyal')}
                                                {this.createCheckBox('starter', 'aloo_dry_poriyal', 'Aloo dry poriyal')}
                                                {this.createCheckBox('starter', 'snakeguard_poriyal', 'Snakegourd poriyal')}
                                                {this.createCheckBox('starter', 'tondekai_poriyal', 'Tondekai poriyal')}
                                            </div>; break;
        case 'North/South': startersElems = <div className="box">
                                            {this.createCheckBox('starter', 'paneer_tikka', 'Paneer Tikka (5 pieces)')}
                                            {this.createCheckBox('starter', 'cheese_balls', 'Potato cheese balls (4 pieces)')}
                                            {this.createCheckBox('starter', 'spring_rolls', 'Spring rolls (4 pieces)')}
                                            {this.createCheckBox('starter', 'gobi_chilli', 'Gobi chilli')}
                                            {this.createCheckBox('starter', 'gobi_manchurian', 'Gobi manchurian')}
                                            {this.createCheckBox('starter', 'veg_manchurian', 'Veg manchurian')}
                                            {this.createCheckBox('starter', 'potato_wedges', 'Potato wedges (5 pieces)')}
                                            {this.createCheckBox('starter', 'aloo_tikki', 'Aloo Tikki (4 pieces)')}
                                            {this.createCheckBox('starter', 'veg_cutlet', 'Mix veg cutlet (2 pieces)')}
                                            {this.createCheckBox('starter', 'thove_parupu', 'Tovve/parupu')}
                                            {this.createCheckBox('starter', 'cucumber_kosambari', 'Cucumber kosambri')}
                                            {this.createCheckBox('starter', 'moong_dal_kosambari', 'Moong dal kosambri')}
                                            {this.createCheckBox('starter', 'masala_vada', 'Masala vada')}
                                            {this.createCheckBox('starter', 'mix_veg_poriyal', 'Mix veg poriyal')}
                                            {this.createCheckBox('starter', 'pumpkin_poriyal', 'Pumpkin poriyal')}
                                            {this.createCheckBox('starter', 'beetroot_poriyal', 'Beetroot poriyal')}
                                            {this.createCheckBox('starter', 'aloo_dry_poriyal', 'Aloo dry poriyal')}
                                            {this.createCheckBox('starter', 'snakeguard_poriyal', 'Snakegourd poriyal')}
                                            {this.createCheckBox('starter', 'tondekai_poriyal', 'Tondekai poriyal')}
                                            </div>; break;
                                            default: null;
      }
      return startersElems;
    }
    getMainCourse(){
      let startersElems = null;
      switch(localStorage.getItem('cuisine')) {
        case 'North Indian': startersElems = <div className="box">
                                              {this.createCheckBox('main-course', 'plain_roti', 'Plain Roti (phulka style) - 3 pcs')}
                                              {this.createCheckBox('main-course', 'butter_nan', 'Butter Nan - 2 pieces')}
                                              {this.createCheckBox('main-course', 'plain_nan', 'Plain Nan - 2 pieces')}
                                              {this.createCheckBox('main-course', 'garlic_nan', 'Garlic Nan - 2 pieces')}
                                              <div><b>Side dish</b> <span style={{fontSize: '13px'}}>(upto 2)</span></div>
                                              {this.createCheckBox('side-dish', 'paneer_butter_masala', 'Paneer butter masala')}
                                              {this.createCheckBox('side-dish', 'capcicum_masala', 'Capcicum masala')}
                                              {this.createCheckBox('side-dish', 'dal_makhani', 'Dal makhani')}
                                              {this.createCheckBox('side-dish', 'navratan_korma', 'Navratan Korma')}
                                              {this.createCheckBox('side-dish', 'mix_veg_curry', 'Mix veg curry')}
                                              {this.createCheckBox('side-dish', 'dal_tadka', 'Dal tadka')}
                                              <div><b>Rice</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('rice-item', 'plain_rice', 'Plain steamed rice')}
                                              {this.createCheckBox('rice-item', 'peas_pulao', 'Peas Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_pulao', 'Veg Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_biriyani', 'Veg biriyani (with raitha)')}
                                              {this.createCheckBox('rice-item', 'fried_rice', 'Fried rice - with chilli sauce')}
                                              <div><b>Salads</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('salad-item', 'veg_salad', 'Veg salad')}
                                              {this.createCheckBox('salad-item', 'sprout_salad', 'Sprout salad')}
                                            </div>; break;
        case 'South Indian': startersElems = <div className="box">
                                              {this.createCheckBox('main-course', 'chapati', 'Chapati - 2 pieces')}
                                              {this.createCheckBox('main-course', 'poori', 'Poori - 3 pieces')}
                                              <div><b>Side dish</b> <span style={{fontSize: '13px'}}>(upto 2)</span></div>
                                              {this.createCheckBox('side-dish', 'mix_veg_sagu', 'Mix veg sagu')}
                                              {this.createCheckBox('side-dish', 'veg_kurma', 'Mix veg kurma')}
                                              {this.createCheckBox('side-dish', 'tomato_gojju', 'Tomato gojju')}
                                              {this.createCheckBox('side-dish', 'majjige_huli', 'Majjige huli')}
                                              {this.createCheckBox('side-dish', 'green_leaf_sambar', 'Green-leaf sambar')}
                                              {this.createCheckBox('side-dish', 'tomato_rasam', 'Tomato rasam')}
                                              <div><b>Rice</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('rice-item', 'plain_rice', 'Plain steamed rice')}
                                              {this.createCheckBox('rice-item', 'peas_pulao', 'Peas Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_pulao', 'Veg Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_biriyani', 'Veg biriyani (with raitha)')}
                                              {this.createCheckBox('rice-item', 'puliyogare', 'Puliyogare')}
                                              <div><b>Salads</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('salad-item', 'veg_salad', 'Veg salad')}
                                              {this.createCheckBox('salad-item', 'sprout_salad', 'Sprout salad')}
                                            </div>; break;
        case 'North/South': startersElems = <div className="box">
                                              {this.createCheckBox('main-course', 'plain_roti', 'Plain Roti (phulka style) - 3 pcs')}
                                              {this.createCheckBox('main-course', 'butter_nan', 'Butter Nan - 2 pieces')}
                                              {this.createCheckBox('main-course', 'plain_nan', 'Plain Nan - 2 pieces')}
                                              {this.createCheckBox('main-course', 'garlic_nan', 'Garlic Nan - 2 pieces')}
                                              {this.createCheckBox('main-course', 'chapati', 'Chapati - 2 pieces')}
                                              {this.createCheckBox('main-course', 'poori', 'Poori - 3 pieces')}
                                              <div><b>Side dish</b> <span style={{fontSize: '13px'}}>(upto 2)</span></div>
                                              {this.createCheckBox('side-dish', 'paneer_butter_masala', 'Paneer butter masala')}
                                              {this.createCheckBox('side-dish', 'capcicum_masala', 'Capcicum masala')}
                                              {this.createCheckBox('side-dish', 'dal_makhani', 'Dal makhani')}
                                              {this.createCheckBox('side-dish', 'navratan_korma', 'Navratan Korma')}
                                              {this.createCheckBox('side-dish', 'mix_veg_curry', 'Mix veg curry')}
                                              {this.createCheckBox('side-dish', 'dal_tadka', 'Dal tadka')}
                                              {this.createCheckBox('side-dish', 'mix_veg_sagu', 'Mix veg sagu')}
                                              {this.createCheckBox('side-dish', 'veg_kurma', 'Mix veg kurma')}
                                              {this.createCheckBox('side-dish', 'tomato_gojju', 'Tomato gojju')}
                                              {this.createCheckBox('side-dish', 'majjige_huli', 'Majjige huli')}
                                              {this.createCheckBox('side-dish', 'green_leaf_sambar', 'Green-leaf sambar')}
                                              {this.createCheckBox('side-dish', 'tomato_rasam', 'Tomato rasam')}
                                              <div><b>Rice</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('rice-item', 'plain_rice', 'Plain steamed rice')}
                                              {this.createCheckBox('rice-item', 'peas_pulao', 'Peas Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_pulao', 'Veg Pulao - with raitha')}
                                              {this.createCheckBox('rice-item', 'veg_biriyani', 'Veg biriyani (with raitha)')}
                                              {this.createCheckBox('rice-item', 'fried_rice', 'Fried rice - with chilli sauce')}
                                              {this.createCheckBox('rice-item', 'puliyogare', 'Puliyogare')}
                                              <div><b>Salads</b> <span style={{fontSize: '13px'}}>(any 1)</span></div>
                                              {this.createCheckBox('salad-item', 'veg_salad', 'Veg salad')}
                                              {this.createCheckBox('salad-item', 'sprout_salad', 'Sprout salad')}
                                            </div>; break;
        default: null;
      }
      return startersElems;
    }
    getDrinks(){
      let startersElems = null;
      switch(localStorage.getItem('cuisine')) {
        case 'North Indian': startersElems = <div className="box">
                                                {this.createCheckBox('drink', 'lemonade', 'Lemonade')}
                                                {this.createCheckBox('drink', 'masala_buttermilk', 'Masala Buttermilk')}
                                                {this.createCheckBox('drink', 'fruit_punch', 'Fruit punch')}
                                                {this.createCheckBox('drink', 'orange_squash', 'Orange squash')}
                                                {this.createCheckBox('drink', 'pineapple_squash', 'Pineapple squash')}
                                            </div>; break;
        case 'South Indian': startersElems = <div className="box">
                                                {this.createCheckBox('drink', 'lemonade', 'Lemonade')}
                                                {this.createCheckBox('drink', 'masala_buttermilk', 'Masala Buttermilk')}
                                            </div>; break;
        case 'North/South': startersElems = <div className="box">
                                                {this.createCheckBox('drink', 'lemonade', 'Lemonade')}
                                                {this.createCheckBox('drink', 'masala_buttermilk', 'Masala Buttermilk')}
                                                {this.createCheckBox('drink', 'fruit_punch', 'Fruit punch')}
                                                {this.createCheckBox('drink', 'orange_squash', 'Orange squash')}
                                                {this.createCheckBox('drink', 'pineapple_squash', 'Pineapple squash')}
                                            </div>; break;
        default: null;
      }
      return startersElems;
    }
    getDesserts(){
      let startersElems = null;
      switch(localStorage.getItem('cuisine')) {
        case 'North Indian': startersElems = <div className="box">
                                                {this.createCheckBox('dessert', 'gulab_jamoon', 'Gulab jamoon - 2 pieces')}
                                                {this.createCheckBox('dessert', 'cashew_burfi', 'Cashew burfi')}
                                                {this.createCheckBox('dessert', 'coconut_burfi', 'Coconut burfi')}
                                                {this.createCheckBox('dessert', 'rasgulla', 'Rasgulla - 2 pieces')}
                                            </div>; break;
        case 'South Indian': startersElems = <div className="box">
                                                {this.createCheckBox('dessert', 'gulab_jamoon', 'Gulab jamoon - 2 pieces')}
                                                {this.createCheckBox('dessert', 'rasmalai', 'Rasmalai')}
                                                {this.createCheckBox('dessert', 'cashew_burfi', 'Cashew burfi')}
                                                {this.createCheckBox('dessert', 'coconut_burfi', 'Coconut burfi')}
                                            </div>; break;
        case 'North/South': startersElems = <div className="box">
                                                {this.createCheckBox('dessert', 'gulab_jamoon', 'Gulab jamoon - 2 pieces')}
                                                {this.createCheckBox('dessert', 'cashew_burfi', 'Cashew burfi')}
                                                {this.createCheckBox('dessert', 'coconut_burfi', 'Coconut burfi')}
                                                {this.createCheckBox('dessert', 'rasgulla', 'Rasgulla - 2 pieces')}
                                                {this.createCheckBox('dessert', 'rasmalai', 'Rasmalai')}
                                            </div>; break;
        default: null;
      }
      return startersElems;
    }
    render(){
        return (<div className="content margin-sm"><div className="preview-title">Create your {this.state.cuisine} meal plate to check price</div><br/>
            
            <form action="/submitGetSlot" method="post" class="landing_page" id="slotForm" style={{display: 'none'}}>
              <input type="hidden" name="email" value="" id="email" />
               <input type="hidden" name="members" value="" id="members" />
            </form>

            <img src="/sc/plate_big.png" className="meal-plate" width="160px"/>
            <img id="starter-item-1" src="" className="meal-plate meal-item starter-item-2" />
            <img id="starter-item-2" src="" className="meal-plate meal-item starter-item-1" />
            <img id="starter-item-3" src="" className="meal-plate meal-item starter-item-3" />
            <img id="starter-item-4" src="" className="meal-plate meal-item starter-item-4" />

            <img id="main-course-item-1" src="" className="meal-plate meal-item main-course-item-1" />
            <img id="side-dish-item-1" src="" className="meal-plate meal-item side-dish-item-1" />  
            <img id="side-dish-item-2" src="" className="meal-plate meal-item side-dish-item-2" /> 

            <img id="rice-item-1" src="" className="meal-plate meal-item rice-item-1" /> 

            <img id="salad-item-1" src="" className="meal-plate meal-item salad-item-1" />
            <img id="dessert-item-1" src="" className="meal-plate meal-item dessert-item-1" />

            <img id="drink-item-1" src="" className="meal-plate meal-item drink-item-1" />

              <div className="preview-panel">
                <div className="preview-menu-type">Select Starters <span style={{fontSize: '13px'}}>(upto 4)</span></div>
                {this.getStarters()}
                <div className="preview-menu-type">Select Main Course</div>
                {this.getMainCourse()}
                <div className="preview-menu-type">Select Desserts <span style={{fontSize: '13px'}}>(any 1)</span></div>
                {this.getDesserts()}
                <div className="preview-menu-type">Select Drinks <span style={{fontSize: '13px'}}>(any 1)</span></div>
                {this.getDrinks()}
                <div className="btn-parent-float">
                  <Link to="/quoteChecker/step3" className="btn fixed-btn-float" style={{margin:'0 auto',zIndex:0}}>
                    <span>Book free sample</span>
                  </Link>
                  <center><div style={{marginTop: '24px'}}>Questions? Call us at <a href="tel:+91-7619514999">+91-7619514999</a></div></center>
                </div>
              </div>
              {this.state.lastAdded !== '' && 
                <div className="price-panel-container">
                  <div className="price-panel">
                    
                    <div className="price-panel-title">{this.state.perPlatePrice !== '' && <span style={{fontSize: '16px', opacity: '0.5'}}>Price per plate:</span> }
                      <span style={{color: '#039e80',fontSize: '25px',fontFamily: 'sans-serif',fontWeight: 'normal'}}>&nbsp;{this.state.perPlatePrice !== '' && `₹${this.state.perPlatePrice}`}</span></div>
                    <div className="price-panel-title">{this.state.priceForAllPlates !== ''
                       && <span style={{fontSize: '16px', opacity: '0.5'}}>Price for {this.state.members} plates:</span>}
                       <span style={{color: '#039e80',fontSize: '18px',fontFamily: 'sans-serif',fontWeight: 'normal'}}>&nbsp;{this.state.priceForAllPlates !== '' && `₹${this.state.priceForAllPlates}`}</span></div>
                  </div>
                </div>}
          </div>
          );
    }
}

class OnboardStep2 extends Component {
    constructor(props) {
      super(props);
      this.state = {mob: '+91-'};
      this.setMob = this.setMob.bind(this);
      this.onNextClick = this.onNextClick.bind(this);
    }
    componentDidMount() {
      $(window).scrollTop(0);
    }
    setMob(e) {
      this.setState({mob: e.target.value});
    }
    onNextClick() {
      document.getElementById('email').value = this.state.mob;
      document.getElementById('members').value = localStorage.getItem('order');
      document.getElementById('slotForm').submit();
    }
    render(){ 
        return (<div className="content"><div style={{fontSize:'16px',textAlign:'center',padding:'0 20px'}}>Enter your mobile number below to confirm free taste sample.</div><br/>
          <form action="/submitGetSlot" method="post" class="landing_page" id="slotForm" style={{display: 'none'}}>
                <input type="hidden" name="email" value="" id="email" />
                 <input type="hidden" name="members" value="" id="members" />
              </form>
            <center><input name="mobNum" type="text" id="mobNum" style={{width:'280px'}} value={this.state.mob} required="" className="custom-text" onChange={(e)=>{this.setMob(e)}} /></center>
            <img src="../sc/ic_delivery.png"  width="160px" style={{margin:'0 auto',width:'300px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/start" onClick={(e)=>{e.preventDefault();this.onNextClick();}} className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Book Now! (free)</span>
            </Link>
          </div>
          );
    }
}

render(<Router>
        <div>
        
        <Route path="/quoteChecker" render={()=>(
            <div>
            <OnboardTitle />
            <Route exact path="/quoteChecker" component={Home}/>
            <Route exact path="/quoteChecker/step1" component={Onboard}/>
            <Route exact path="/quoteChecker/step2" component={OnboardStep1}/>
            <Route exact path="/quoteChecker/step3" component={OnboardStep2}/>
          </div>)} />
        </div>
    </Router>, document.getElementById('container'));