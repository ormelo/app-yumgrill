import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.redirect = this.redirect.bind(this);
    }
    redirect(from){
      return function(e) {window.location.href='/fit-profile?from='+from;};
    }
    componentDidMount() {
      document.querySelector('.slider').style.display = 'inline';
      window.addEventListener("scroll", function(){
        if(!window.lazyLoaded) {
          [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
            var imgload = img;
            imgload.src=imgload.getAttribute('data-src');
            img.onload = function() {
              img.removeAttribute('data-src');
            };
            window.lazyLoaded=true;
          });
        }
      });
      if(nonLatestChrome) {
        window.lazyLoadTimer = setInterval(function(){
          console.log(document.getElementById('b4').src);
          if(document.getElementById('b4').src == 'img/b4.jpg')
              clearInterval(window.lazyLoadTimer);
          document.getElementById('b1').src='img/b1.jpg';
          document.getElementById('b2').src='img/b2.jpg';
          document.getElementById('b3').src='img/b3.jpg';
          document.getElementById('b4').src='img/b4.jpg';
          document.getElementById('bstep2').src='img/bstep2.png';
          document.getElementById('bsize').src='img/bsize.png';
          document.getElementById('r1').src='img/r1.jpg';
          document.getElementById('r2').src='img/r2.jpg';
          document.getElementById('r3').src='img/r3.jpg';
        }, 1500);
      }
    }
    render(){
        return (<div>
                  <div className="logo"></div>
                  <div className="line"/>
                  <div className="slider dbg" onClick={this.redirect('homescreen_slider')}>
                    <div>
                        <img width="250px" className="banner" src="img/b1.webp" alt="" />
                    </div>
                    <div>
                        <img width="250px" className="banner" src="img/b2.webp" alt="" />
                    </div>
                    <div>
                        <img width="250px" className="banner" src="img/b3.webp" alt="" />
                    </div>
                    <div>
                      <img id="b4" width="250px" className="banner" data-src="img/b4.webp" alt="" />
                  </div>
                  <div>
                      <img width="250px" className="banner" src="img/b3.webp" alt="" />
                  </div>
                  <div>
                      <img width="250px" className="banner" src="img/b1.webp" alt="" />
                  </div>
                </div>
                
                  <div className="headline main" onClick={this.redirect('homescreen_try_dresses_headline')}>New Looks picked for You</div>
                  <div className="description" style={{marginTop: '-8px',fontFamily:'Quicksand', width:'90%'}}></div>
                  <br/>                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile?from=homescreen_shop_now" className="btn"><span>Shop now</span></a>}
                  </div>
                  
                  <div id="G"></div>
                </div>
          );
    }
}

render(<Home/>, document.getElementById('container'));