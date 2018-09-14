import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.dateChange = this.dateChange.bind(this);
      this.state = {dateVal: '2018-09-01', members: ''};
    }
    dateChange(e) {
      this.setState({dateVal: e.target.value});
    }
    componentDidMount() {
      this.setState({members: localStorage.getItem("num-members")})
      var nlform = new NLForm( document.getElementById( 'nl-form' ));
    }
    render(){
        return (<div>
                  <div className="description main clearfix">
                    <form id="nl-form" className="nl-form">
                      <table>
                      <tr><td><div>I need catering for&nbsp;
                      <select>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch" selected>Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Dinner">Dinner</option>
                      </select></div>
                      </td></tr>
                      <tr><td>&nbsp;on&nbsp;
                      <input id="myDate" type="date" style={{width:'148px', marginTop:'10px'}} value={this.state.dateVal} onChange={(e)=>{this.dateChange(e);}}></input>
                      </td></tr>
                      </table>
                      <div className="nl-overlay"></div>
                    </form>
                  </div>
                  <div className="button-container">
                    <Link to="/quoteChecker/step1" className="btn"><span>Next</span></Link>
                  </div>
                </div>
          );
    }
}

class OnboardTitle extends Component {
    render(){
        return (<div>
                  <div className="logo"><img alt="Scoosh.in" src="./sc/logo.png"/></div>
                  <div className="headline">Quote Checker</div>
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
  selectCuisine(cuisine) {
    if(cuisine == 'north')
      localStorage.setItem('cuisine', 'North Indian');
    else if(cuisine == 'south')
      localStorage.setItem('cuisine', 'South Indian');
    else if(cuisine == 'italian')
      localStorage.setItem('cuisine', 'Italian');

    document.getElementById('north-checked').style.display = 'none';
    document.getElementById('south-checked').style.display = 'none';
    document.getElementById('italian-checked').style.display = 'none';
    document.getElementById('north-img').style.opacity = '1';
    document.getElementById('south-img').style.opacity = '1';
    document.getElementById('italian-img').style.opacity = '1';
    document.getElementById(`${cuisine}-img`).style.opacity = '0.2';
    document.getElementById(`${cuisine}-checked`).style.display = 'inline';
  }
    render(){
        return (<div className="content"><div style={{fontSize:'18px',textAlign:'center'}}>Select your cuisine</div><br/>
            <div id="recent-portfolio-list">
        
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mix">
                      <div className="portfolio-item-sm" onClick={()=>this.selectCuisine('north')}>
                          <div className="portfolio-img">
                              <a>
                                  <img id="north-img" src="/sc/m_north.png" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
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
                                  <img id="south-img" src="/sc/m_south.png" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
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
                      <div className="portfolio-item-sm" onClick={()=>this.selectCuisine('italian')}>
                          <div className="portfolio-img">
                              <a>
                                  <img id="italian-img" src="/sc/m_italian.png" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
                                  <svg id="italian-checked" className="checked" x="0px" y="0px" viewBox="0 0 488.878 488.878" style={{enableBackground:'new 0 0 488.878 488.878'}} width="512px" height="512px"><g><g><polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " fill="#0abc9a"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              </a>
                          </div>
                          <div className="portfolio-item-content">
                              <h3 className="header">
                                  Italian
                              </h3>
                              <p className="body"></p>
                          </div>
                      </div>
                      <br/><br/><br/>
                  </div>
            </div>
            <div className="btn-parent">
              <Link to="/quoteChecker/step2" className="btn fixed-btn" style={{margin:'0 auto',zIndex:0}}>
                <span>Next</span>
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
      this.getDesserts = this.getDesserts.bind(this);
      this.onCheckHandler = this.onCheckHandler.bind(this);
      this.onCheck = this.onCheck.bind(this);
      this.onUncheck = this.onUncheck.bind(this);
      this.starters = [];
      this.mainCourse = [];
      this.desserts = [];
      this.state = {cuisine: localStorage.getItem('cuisine'), members: localStorage.getItem('num-members'), perPlatePrice: '0', lastAdded: '', priceForAllPlates: '0'};


      this.northIndianMenu = {
        "paneer_tikka": {"price": "45", "imgUrl": "paneer_tikka.png"},
        "cheese_balls": {"price": "35", "imgUrl": "cheese_balls.png"},
        "spring_rolls": {"price": "25", "imgUrl": "spring_rolls.png"}
      };
    }
    onCheck(itemType, item) {
      if(itemType == 'starter') {
        this.starters.push(item);
      } else if(itemType == 'main-course') {
        this.mainCourse.push(item);
      } else if(itemType == 'desserts') {
        this.desserts.push(item);
      }
      let perPlatePriceVal = parseInt(this.state.perPlatePrice, 10) + parseInt(this.northIndianMenu[item].price,10);
      let priceForAllPlatesVal = perPlatePriceVal * parseInt(localStorage.getItem('num-members'));
      let lastAddedVal = 'Last added: '+item.replace(/_/g, ' ')+': ₹'+this.northIndianMenu[item].price;
      this.setState({lastAdded: lastAddedVal, perPlatePrice: perPlatePriceVal, priceForAllPlates: priceForAllPlatesVal});
      document.getElementById('starter-item-1').src = '/sc/items/'+this.northIndianMenu[item].imgUrl;
    }
    onUncheck(itemType, item) {
      let perPlatePriceVal = parseInt(this.state.perPlatePrice, 10) - parseInt(this.northIndianMenu[item].price,10);
      let lastAddedVal = 'Last removed: '+item.replace(/_/g, ' ')+': ₹'+this.northIndianMenu[item].price;
      let priceForAllPlatesVal = perPlatePriceVal * parseInt(localStorage.getItem('num-members'));
      this.setState({lastAdded: lastAddedVal, perPlatePrice: perPlatePriceVal, priceForAllPlates: priceForAllPlatesVal});
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
                                                {this.createCheckBox('starter', 'paneer_tikka', 'Paneer Tikka (5 pieces)..')}
                                                {this.createCheckBox('starter', 'cheese_balls', 'Potato cheese balls (5 pieces)')}
                                                {this.createCheckBox('starter', 'spring_rolls', 'Spring rolls (5 pieces)')}
                                                {this.createCheckBox('starter', 'gobi_chilli', 'Gobi chilli')}
                                                {this.createCheckBox('starter', 'gobi_manchurian', 'Gobi manchurian')}
                                                {this.createCheckBox('starter', 'babycorn_manchurian', 'Babycorn manchurian')}
                                                {this.createCheckBox('starter', 'potato_wedges', 'Potato wedges (5 pieces)')}
                                                {this.createCheckBox('starter', 'aloo_dal_tikki', 'Aloo & Dal Tikki (5 pieces)')}
                                                {this.createCheckBox('starter', 'mix_veg_cutlet', 'Mix veg cutlet (1 piece)')}
                                            </div>; break;
        case 'South Indian': startersElems = <div>South Indian</div>; break;
        case 'Italian': startersElems = <div>Italian</div>; break;
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
                                              <div><b>Side dish</b></div>
                                              {this.createCheckBox('main-course', 'paneer_butter_masala', 'Paneer butter masala')}
                                              {this.createCheckBox('main-course', 'capcicum_masala', 'Capcicum masala')}
                                              {this.createCheckBox('main-course', 'dal_makhani', 'Dal makhani')}
                                              {this.createCheckBox('main-course', 'navratan_korma', 'Navratan Korma')}
                                              {this.createCheckBox('main-course', 'mix_veg_curry', 'Mix veg curry')}
                                              {this.createCheckBox('main-course', 'dal_tadka', 'Dal tadka')}
                                              <div><b>Rice</b></div>
                                              {this.createCheckBox('main-course', 'peas_pualo', 'Peas Pulao - with raitha')}
                                              {this.createCheckBox('main-course', 'veg_pulao', 'Veg Pulao - with raitha')}
                                              {this.createCheckBox('main-course', 'veg_biriyani', 'Veg biriyani (with raitha)')}
                                              {this.createCheckBox('main-course', 'fried_rice', 'Fried rice - with chilli sauce')}
                                              <div><b>Salads</b></div>
                                              {this.createCheckBox('main-course', 'veg_salad', 'Veg salad')}
                                              {this.createCheckBox('main-course', 'sprout_salad', 'Sprout salad')}
                                            </div>; break;
        case 'South Indian': startersElems = <div>South Indian</div>; break;
        case 'Italian': startersElems = <div>Italian</div>; break;
        default: null;
      }
      return startersElems;
    }
    getDesserts(){
      let startersElems = null;
      switch(localStorage.getItem('cuisine')) {
        case 'North Indian': startersElems = <div className="box">
                                                {this.createCheckBox('desserts', 'lemonade', 'Lemonade')}
                                                {this.createCheckBox('desserts', 'masala_buttermilk', 'Masala Buttermilk')}
                                                {this.createCheckBox('desserts', 'fruit_punch', 'Fruit punch')}
                                                {this.createCheckBox('desserts', 'orange_squash', 'Orange squash')}
                                                {this.createCheckBox('desserts', 'pineapple-squash', 'Pineapple squash')}
                                            </div>; break;
        case 'South Indian': startersElems = <div>South Indian</div>; break;
        case 'Italian': startersElems = <div>Italian</div>; break;
        default: null;
      }
      return startersElems;
    }
    render(){
        return (<div className="content margin-sm"><div className="preview-title">Create your {this.state.cuisine} meal plate to check price</div><br/>
            <img src="/sc/plate_big.png" className="meal-plate" width="160px"/>
            <img id="starter-item-1" src="" className="meal-plate starter-item-1" />
              <div className="preview-panel">
                <div className="preview-menu-type">Select Starters</div>
                {this.getStarters()}
                <div className="preview-menu-type">Select Main Course</div>
                {this.getMainCourse()}
                <div className="preview-menu-type">Select Desserts</div>
                {this.getDesserts()}
                <div className="btn-parent">
                  <Link to="/quoteChecker/step3" className="btn fixed-btn" style={{margin:'0 auto',zIndex:0}}>
                    <span>Next</span>
                  </Link>
                </div>
              </div>
              {this.state.lastAdded !== '' && 
                <div className="price-panel">
                  <div className="price-last-added">{this.state.lastAdded !== '' && `${this.state.lastAdded}`}</div>
                  <div className="price-panel-title">{this.state.perPlatePrice !== '' && <span style={{fontSize: '16px', opacity: '0.5'}}>Price per plate:</span> }
                    <span style={{color: '#039e80',fontSize: '25px'}}>&nbsp;{this.state.perPlatePrice !== '' && `₹${this.state.perPlatePrice}`}</span></div>
                  <div className="price-panel-title">{this.state.priceForAllPlates !== ''
                     && <span style={{fontSize: '16px', opacity: '0.5'}}>Price for {this.state.members} plates:</span>}
                     <span style={{color: '#039e80',fontSize: '18px'}}>&nbsp;{this.state.priceForAllPlates !== '' && `₹${this.state.priceForAllPlates}`}</span></div>
                </div>}
          </div>
          );
    }
}

class OnboardStep2 extends Component {
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center',padding:'0 20px'}}>Try on clothes online & order the right fit!</div><br/>
            <img src="../img/step3.png"  width="160px" style={{margin:'0 auto',width:'300px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/start" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Get started</span>
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