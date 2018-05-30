import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
import Quiz from './quiz.jsx';
import Merchant from './merchant.jsx';
import Shop from './shop.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreateFitProfile extends Component {
    propTypes: {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
    componentDidMount(){
      gtag('event', 'Stage', {'event_category':'load', 'event_label':'fit-profile'}); 
      gtag('config', 'UA-107877274-1',{'page_title': 'fit_profile','page_location': 'http://www.poseding.com/fit-profile','page_path': '/fit-profile'});
      Loggr.Log.trackUser(uid, "", "Fit profile page visited.");
      console.log('this.props.history:',this.props.history);
      if(variation == 1){
        $('#captureButton').show();
        $('.selfie').show();
        $('#captureButton').show();
      } else if(variation == 0) {
        // $('#selfieMsg').html("Take a selfie when you're ready!");
        // $('.loading-container').show();
      }

      if(!chromeOnly) {
        $('#capture-photo').hide();
      }
      var h = this.props.history;
      const unlisten = h.listen((location, action) => {
        // location is an object like window.location
        console.log('history.listen:', location);
        console.log('nonLatestChrome: ', chromeOnly);
        console.log('location.pathname: ', location.pathname);
        if(chromeOnly && location.pathname == '/fit-profile') {
          console.log('reloading');
          window.location.reload();
        }
      })
      window.onScanComplete = function() {
        var fitStr = 'faceH:'+localStorage.getItem('faceH')+'faceW:'+localStorage.getItem('faceW')+'faceX:'+localStorage.getItem('faceX')+'faceY:'+localStorage.getItem('faceY')+'shoulderH:'+localStorage.getItem('shoulderH')+'shoulderW:'+localStorage.getItem('shoulderW')+'shoulderX:'+localStorage.getItem('shoulderX')+'shoulderY:'+localStorage.getItem('shoulderY');
        // alert(fitStr);
        h.push('/fit-profile/update');
        Loggr.Log.trackUser(uid, "", "selfie captured.");
        setTimeout("sendPic()",1500);
        //if(variation == 0) {
          $('.outline').hide();
        //}
        $('#capture-photo').hide();
        $('#snap').hide();
        $('#camera-stream').hide();
      }
    }
    render(){
        const { match, location, history } = this.props;
        return (<div>
                <div className="content" style={{width: '90%'}}>
                  <div class="select">
                  </div>
                  <div className="fit-profile-heading">Help us identify your body shape and skin tone.</div>
                  <div className="selfie-tbl">
                    <div className="selfie-img-cell">
                      <img className="selfie" src="../img/selfieicon.png" style={{width:'70px',marginTop:'-10px'}}></img>
                    </div>
                    <div style={{display:'table-cell', marginTop: '40px'}} id="captureButton">
                      <label className="btn" htmlFor="file-input" style={{width:'226px',top:'30px'}}><span style={{left: '16px'}}><i className="material-icons" style={{left: '-32px',position:'absolute',top:'-2px'}}>camera_alt</i>Upload Selfie</span></label>
                    </div>
                  </div>
                  <div className="dot-line"><div className="line-left"></div><div className="line-right"></div><span>or</span></div>
                  <div className="selfie-tbl">
                    <div className="selfie-img-cell">
                      <img className="selfie" src="../img/quizicon.jpg" style={{width:'60px',marginTop:'-10px'}}></img>
                    </div>
                    <div style={{display:'table-cell'}}>
                      <Link to="/fit-profile/quiz" className="btn upload-btn" style={{width:'226px',top:'30px',left:'6px'}}><span>Take style quiz</span></Link>
                    </div>
                  </div>
                </div> 
                <div className="loading-container" style={{display:'none'}}><div className="loading"></div><span className="loading-msg">Loading camera. Please wait...</span></div>
                 <input type="file" style={{display:'none'}} accept="image/*" name="file-1[]" id="file-input" dcvalue="" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" dcvalue=""></input>
                 <center><label for="file-input"></label>
                 <div id="selfieImage"><img id="selfieimg"></img></div>
                 <div id="result" className="result">
                 <a id="selfie-url" target="_blank"><canvas id="load-img-canvas"></canvas></a>
                 </div></center>
                 
                 
              </div>
          );
    }
}

var CreateFitProfileWithRouter = withRouter(CreateFitProfile)
var ShopWithRouter = withRouter(Shop)
var QuizWithRouter = withRouter(Quiz)

render(<Router>
        <div>
        <Route path="/fit-profile" render={()=>(
            <div>
            <div className="logo"><img src="../img/logoimg.png" style={{width: '16px',marginLeft: '20px'}}/><span className="logoFont">attirist</span>
            <img className="bag" src="../img/bag.jpg" width="20px"/>
            </div>
            <Route exact path="/fit-profile" component={CreateFitProfileWithRouter}/>
            <Route exact path="/fit-profile/update" component={CaptureMeasurements}/>
            <Route exact path="/fit-profile/quiz" component={QuizWithRouter}/>
          </div>)} />
        <Route path="/shop" render={()=>(
            <div>
            <div className="merchant-frame">
              <div className="logo">
                <img src="../img/logoimg.png" style={{width:'16px',left:'20px',position:'absolute',top:'-4px'}}/>
                <span className="logoFont">a</span>
              </div>
              <span className="merchant-size-container">Please select size <span id="merchantSize">XL</span> below</span>
            </div>
            <Route exact path="/shop" component={ShopWithRouter}/>
            <Route path="/shop/buy" component={Merchant}/>
          </div>
          )}/>
        </div>
    </Router>, document.getElementById('containerWiz'));