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
                  <div className="slider dbg" onClick={this.redirect('slider')}>
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
                
                  <div className="headline main" onClick={this.redirect('try_dresses_headline')}>Try Dresses on You</div>
                  <div className="description" style={{marginTop: '-8px',fontFamily:'Quicksand', width:'90%'}}>See how dresses look &amp; fit you before deciding to buy!</div>
                  <br/>                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile?from=get_started" className="btn"><span>Get Started</span></a>}
                  </div>
                  <div className="headline how" style={{marginTop: '98px',fontSize:'24px'}}>How it works</div>
                  <div className="how-it-works" style={{marginTop: '40px'}} onClick={this.redirect('how_it_works')}>
                      <div className="step-1" onClick={this.redirect('how_it_works_stp1_img')}><img src="img/bstep1.png" width="120px"></img><div style={{fontFamily:'Quicksand'}}>Take a selfie</div></div>
                      <div className="step-arrow" onClick={this.redirect('how_it_works_stp_arrow')}><img src="img/a.png" width="18px"></img><img src="img/a.png" width="18px" className="arrow-2"></img></div>
                      <div className="step-2" onClick={this.redirect('how_it_works_stp2_img')}><img id="bstep2" src="img/bstep2.webp" width="120px"></img><div style={{fontFamily:'Quicksand'}}>Trial & shop</div></div>
                  </div>

                  <div className="headline never" style={{marginTop: '250px',fontSize:'24px'}}>Never order a wrong size</div>
                  <div className="what-size" style={{marginTop: '40px'}}>
                    <div className="description bsize" style={{top: '0px',position: 'relative', width: '320px', marginTop: '-20px'}}>PoseDing tells you exactly how each size fits you. So you'll never order a wrong size!</div>
                    <img onClick={this.redirect('bg_size_img')} id="bsize" data-src="img/bsize.webp" className="testi-img" width="190px" style={{margin:'-20px auto'}}/>
                  </div>

                  <div className="headline happy" style={{marginTop: '376px',fontSize:'24px'}}>Happy Users</div>
                  <div className="what-users-say" style={{marginTop: '30px'}}>
                    <img data-src="img/testi.png" className="testi-img" width="60px" style={{margin:'0 auto'}}/>
                    <span className="testi-name">Priya Oswal, Bangalore</span>
                    <div onClick={this.redirect('testimonial')} className="bubbledLeft">When I ordered my dress based on size recommended by the app, I wasn't sure. But I got my dress shipped last Saturday and when I tried on, bingo.. Just the fit I wanted! Great job Poseding!</div>
                  </div>

                  <div className="headline range" style={{marginTop: '160px',fontSize:'24px'}}>Shop our newest range</div>
                  <div onClick={this.redirect('dress_range_img')} className="show-new-range" style={{marginTop: '32px'}}>
                    <img id="r1" data-src="img/r1.webp" className="testi-img" width="90%" />
                    <img id="r2" data-src="img/r2.webp" className="testi-img" width="90%" />
                    <img id="r3" data-src="img/r3.webp" className="testi-img" width="90%" />
                  </div>
                  <div id="G"></div>
                </div>
          );
    }
}

render(<Home/>, document.getElementById('container'));