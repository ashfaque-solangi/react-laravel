
import React from 'react';

class ContactUs extends React.Component {
    render() {
      const mystyle = {
        textIndent: "0",
        border: "none",
        color: "#000",
        fontSize: "18px",
        textAlign: "center",
      };

      return(
          <div className="container pt-4">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="mail_section">
                      <h1 className="contact_taital">Feedback Form</h1>
                      <input type="" className="email_text" placeholder="Name" name="Name"/>
                      <input type="" className="email_text" placeholder="Phone" name="Phone"/>
                      <input type="" className="email_text" placeholder="Email" name="Email"/>
                      <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                      <div className="send_bt">
                        <button type="submit" className="btn btn-primary">
                          Send
                        </button>
                      </div>
                      
                    </div>
                </div>
              </div>
          </div>
      );
    }
}

export default ContactUs;
