

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {postRequest} from "./../utils/server-request";

const RegisterPage = () => {
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
        
        await postRequest('register',form, (res)=>{
            const {status,message} = res;

            if(status)
            {
                navigate("../login");
            }
            else{
                alert(message);
            }
        });
    }

          return(
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handlerForm}>
                    <div className="Auth-form-content">
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                                onChange={handlerInput}
                                value={form?.name}
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                onChange={handlerInput}
                                value={form?.email}
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                onChange={handlerInput}
                                value={form?.password}
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Registered Already <Link to="/landing_page">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        );

}

export default RegisterPage


// import React from 'react';
// import {Row, Col, Form} from 'react-bootstrap';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { postRequest } from '../utils/server-request';


// class RegisterPage extends React.Component{

//     constructor(props){
// 		super(props);

// 		this.state = {
// 			"name" : "",
// 			"email" : "",
// 			"password" : "",
//             "data" : [],
// 		};

// 		this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit      = this.handleSubmit.bind(this);
// 		this.clearFormData     = this.clearFormData.bind(this);
// 	}

//     render(){
//         return(
//             <div className="Auth-form-container">
//                 <form className="Auth-form" onSubmit={this.handleSubmit}>
//                     <div className="Auth-form-content">
//                         <div className="form-group mt-3">
//                             <label>Full Name</label>
//                             <input
//                                 type="text"
//                                 className="form-control mt-1"
//                                 placeholder="e.g Jane Doe"
//                                 onChange={this.handleInputChange}
//                                 value={this.state.name}
//                                 id="name"
//                                 name="name"
//                             />
//                         </div>
//                         <div className="form-group mt-3">
//                             <label>Email address</label>
//                             <input
//                                 type="email"
//                                 className="form-control mt-1"
//                                 placeholder="Email Address"
//                                 onChange={this.handleInputChange}
//                                 value={this.state.email}
//                                 id="email"
//                                 name="email"
//                             />
//                         </div>
//                         <div className="form-group mt-3">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 className="form-control mt-1"
//                                 placeholder="Password"
//                                 onChange={this.handleInputChange}
//                                 value={this.state.password}
//                                 id="password"
//                                 name="password"
//                             />
//                         </div>
//                         <div className="d-grid gap-2 mt-3">
//                             <button type="submit" className="btn btn-primary">
//                                 Submit
//                             </button>
//                         </div>
//                         <p className="text-center mt-2">
//                             Registered Already <Link to="/landing_page">Login</Link>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         );
//     }

//     handleInputChange(element)
// 	{
//         // alert("Handle Input Change");
// 		// alert(element);
// 		// alert(element.target);
// 		// alert(element.target.type);
// 		// alert(element.target.name);
// 		// alert(element.target.value);

// 		var element_name 	    = element.target.name;
// 		var element_value 	    = element.target.value;

// 		this.setState({
// 			[element_name] : element_value,
// 		});
// 	}

//     async handleSubmit(formElement)
// 	{
// 		alert("Handle Submit");
// 		//alert(formElement);

// 		formElement.preventDefault();

// 		var data = {
// 			name : this.state.name,
// 			email    : this.state.email,
// 			password : this.state.password,
// 		};

//         console.log("form", data);

//         await postRequest('register', data, (res)=>{
//             const {status} = res;

//             if(status)
//             {
//                 na
//             }
//         });

//         // this.setState({
// 		// 	data : data,
// 		// 	data : [...this.state.data, data],
// 		// });


//         // try {
//         //     //Make a POST request to the backend API to insert data
//         //     const response = axios.post('http://localhost:8000/api/insertData', data);
//         //     console.log(response);
//         // } catch (error) {
//         //     console.error('Error inserting data:', error);
//         // }

// 		this.clearFormData();
// 	}

//     clearFormData()
// 	{
// 		this.setState({
// 			name : "",
// 			email : "",
// 			password : "",
// 		});
// 	}
// }

// export default RegisterPage;
