import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.dateChange = this.dateChange.bind(this);
      this.state = {dateVal: '2018-09-01'}
    }
    dateChange(e) {
      this.setState({dateVal: e.target.value});
    }
    componentDidMount() {
      var nlform = new NLForm( document.getElementById( 'nl-form' ));
    }
    render(){
        return (<div>
                  <div className="logo"><img alt="Scoosh.in" src="./sc/logo.png"/></div>
                  <div className="headline">Quote Checker</div>
                  <hr className="line1" height="1px"/>
                  <hr className="line2" height="10px"/>
                  <div className="description main clearfix">
                    <form id="nl-form" className="nl-form">
                      I need catering for&nbsp;
                      <select>
                        <option value="1" selected>20 members</option>
                      </select>
                       &nbsp;for&nbsp;
                      <select>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch" selected>Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Dinner">Dinner</option>
                      </select>
                      &nbsp;on&nbsp;
                      <input id="myDate" type="date" style={{width:'148px'}} value={this.state.dateVal} onChange={(e)=>{this.dateChange(e);}}></input>
                      <div className="nl-overlay"></div>
                    </form>
                  </div>
                  <div className="button-container">
                    <Link to="/onboard" className="btn"><span>Next ></span></Link>
                  </div>
                </div>
          );
    }
}

class OnboardTitle extends Component {
    render(){
        return (<div>
                  <div className="logo"></div>
                </div>
          );
    }
}

class Onboard extends Component {
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>You'll start by clicking a selfie</div><br/>
            <img src="img/step1.png"  width="160px" style={{margin:'0 auto',width:'200px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/step1" className="btn" style={{margin:'0 auto',zIndex:0}}>
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
            <Link to="/onboard/step2" className="btn" style={{margin:'0 auto',zIndex:0}}>
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
        <Route exact path="/quoteChecker" component={Home}/>
        <Route path="/onboard" render={()=>(
            <div>
            <OnboardTitle />
            <Route exact path="/onboard" component={Onboard}/>
            <Route exact path="/onboard/step1" component={OnboardStep1}/>
            <Route exact path="/onboard/step2" component={OnboardStep2}/>
          </div>)} />
        </div>
    </Router>, document.getElementById('container'));