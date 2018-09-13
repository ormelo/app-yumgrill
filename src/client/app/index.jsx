import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.dateChange = this.dateChange.bind(this);
      this.state = {dateVal: '2018-09-01', members: ''}
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
    render(){
        return (<div className="content"><div style={{fontSize:'18px',textAlign:'center'}}>Select your cuisine</div><br/>
            <div id="recent-portfolio-list">
        
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mix">
                      <div className="portfolio-item-sm">
                          <div className="portfolio-img">
                              <a>
                                  <img src="/sc/menu_ic.jpeg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
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
                      <div className="portfolio-item-sm">
                          <div className="portfolio-img">
                              <a>
                                  <img src="/sc/menu_ic.jpeg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
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
                      <div className="portfolio-item-sm">
                          <div className="portfolio-img">
                              <a>
                                  <img src="/sc/menu_ic.jpeg" alt="Home Caterers in Bangalore" style={{display: 'inline'}}/>
                              </a>
                          </div>
                          <div className="portfolio-item-content">
                              <h3 className="header">
                                  Italian
                              </h3>
                              <p className="body"></p>
                          </div>
                      </div>
                  </div>
            </div>

            <Link to="/quoteChecker/step2" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Next</span>
            </Link>
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