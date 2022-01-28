import React, {Component} from 'react';
import './carousel.css'
import Dev from '../../images/dev.jpg';

class Customer extends Component{
   render(){
    return(
      <div className="carousel-section">
       <div className="logo-content">Incentivus Solutions</div>
        <div className="customercentric-content">
          <div className="deliver-content">We deliver the</div>
          <div className="customer-content">most customer-centric</div>
          <div className="solutions-content">solutions</div>
        </div>
        <div className="grid-values">
          <div className="row display">
            <div className="col-md-4">
              <div className="h-100">
                {/* <div className="sofa-col">
                <img src={Building} alt="sofa1" />
                </div> */}
                <div className="card-color">
                  <div className="digital-content">Digital <br/>Transformation</div>
                  <p className="digitalText-content">Anyone can highlight the problems <br/> but it takes skill, experience <br/>
                    teamwork and vision to deliver <br/> solutions.</p>
                  <p className="readmore-content">Read More...</p>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="h-100">
                {/* <div className="sofas-col">
                <img src={Building} alt="sofa1" />
                </div>         */}
                <div className="secondCard-color">               
                <div className="digitals-content">Managed <br/>Services</div>
                <p className="digitalTexts-content">Anyone can highlight the problems <br/> but it takes skill, experience <br/>
                    teamwork and vision to deliver <br/> solutions.</p>
                <p className="readmores-content">Read More...</p>             
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thirdCard-color">
                <div className="digital-content">Application <br/>Modernisation</div>
                <p className="digitalText-content">Anyone can highlight the problems <br/> but it takes skill, experience <br/>
                  teamwork and vision to deliver <br/> solutions.</p>
                <p className="readmore-content">Read More...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="incentivus-content">Incentivus core values</div>
        <p className="incentivusText-content">Anyone can highlight the problems but it takes skill, experience, teamwork and vision to deliver<br/>
          solutions that best meet both current and future customer requirements. We at Incentivus <br/>
          Solutions pride ourselves on having created a collaborative environment where our team feel<br/>
          comfortable to share ideas whilst at all times being focused on the end user requirements</p>
          <div className="incentivus-contents">About Us</div>
          <div className="abouts-content">
            <div className='row display'>
              <div className='col-md-6 col-sm-6'>
                <img src={Dev} className="dev-img" alt="" />
              </div>
              <div className='col-md-6 col-sm-6'>
                <p className="aboutText-content">Multi-disciplinary team – all our team leads have over 10+ years’ 
                  <br/>experience implementing solutions within the field
                  <br/>whilst managing all stakeholder relationships.
                </p>
                <p className="aboutText-content">Partnership approach – where we take the time to better
                  <br/>understand the requirements, using our experience to deliver
                  <br/>the most customer orientated solutions.
                </p>
                <p className="aboutText-content">Commercially focused - Practical Solutions that deliver most
                  <br/>value within budget.</p>
              </div>
            </div>
          </div>  
          <div className="contact-overall">
            <div className="contact-content">Contact Us</div> 
            <p className="contactText-content">We are much happier to meet for a coffee indoors or outdoors to discuss any of your</p> 
            <div className="requirementText-content">requirements whilst brainstorming the most practical solutions.</div>  
            <div className="detailsText-content">Leave your details and one of our team will contact you shortly.</div>
            <div className="search-content">
              <div className="row display">
                <div className="col-md-9">
                  <form className="search-form">
                    <div className="input-group">
                    <input
                      type="search"
                      id="searchinput"
                      placeholder="Email Id"
                      aria-describedby="button-addon4"
                      className="form-control bg-none border-0 bg-transparent border-0 search-width"
                    />
                    </div>
                  </form>
                </div>
                <div className="col-md-3">
                  <button type="button" value="submit">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    );  
   }
}
export default Customer;
