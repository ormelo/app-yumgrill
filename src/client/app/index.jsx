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
    localStorage.setItem('cuisine', cuisine);
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
                          <div className="portfolio-item-content">
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
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>Poshfind e-measures you in a jiffy!</div><br/>
            <img src="../img/step2.png"  width="160px" style={{margin:'0 auto',width:'420px',display:'inherit',padding:'40px'}}/>
            <Link to="/quoteChecker/step3" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Next</span>
            </Link>
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