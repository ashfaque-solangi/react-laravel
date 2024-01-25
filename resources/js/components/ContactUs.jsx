
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {postRequest} from "./../utils/server-request";

function ContactUs() {


    const [form,setForm] = useState({});
    const navigate = useNavigate();

    const handlerInput = (event) => {
        const newForm = {...form};

        const inputKey = event.target.name;
        const inputValue = event.target.value;
        newForm[inputKey] = inputValue;

        setForm(newForm);

    }

    const handlerForm = async (e) => {
        e.preventDefault();

        await postRequest('add_feedback',form, (res)=>{
            const {status,message} = res;

            if(status)
            {
                navigate("/");
            }
            else{
                alert(message);
            }
        });
    }

    return (
      <div className="container pt-4">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h1 className="contact_taital">Feedback Form</h1>
                  <div className="mail_section">
                    <form onSubmit={handlerForm}>
                      <input type="text"
                        className="email_text" placeholder="Name"
                        onChange={handlerInput}
                        value={form?.name}
                        id="name"
                        name="name"
                      />
                      <input type="text"
                        className="email_text"
                        placeholder="Phone Number"
                        onChange={handlerInput}
                        value={form?.phone_number}
                        id="phone_number"
                        name="phone_number"
                      />
                      <input type="email"
                        className="email_text"
                        placeholder="Email"
                        onChange={handlerInput}
                        value={form?.email}
                        id="email"
                        name="email"
                      />
                      
                      <textarea
                        className="email_text"
                        placeholder="Feedback"
                        onChange={handlerInput}
                        value={form?.message}
                        id="message"
                        name="message"
                      />

                      <div className="send_bt">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
        </div>  
    )
}

export default ContactUs;
