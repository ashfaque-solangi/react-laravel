

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
                            Registered Already <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        );

}

export default RegisterPage
