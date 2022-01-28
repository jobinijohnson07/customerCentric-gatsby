import React, {Component} from 'react';
import './contact.css'

class Contact extends Component{
   render(){
    return( 
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
    );  
   }
}
export default Contact;
