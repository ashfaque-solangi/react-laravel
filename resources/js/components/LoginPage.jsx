

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {postRequest} from "./../utils/server-request";

const LoginPage = () => {
    const [form,setForm] = useState({});
    const navigate = useNavigate();

    const [loggedIn, setloggedIn] = useState(null);

    const handlerInput = (event) => {
        const newForm = {...form};

        const inputKey = event.target.name;
        const inputValue = event.target.value;
        newForm[inputKey] = inputValue;

        setForm(newForm);

    }

    const handlerForm = async (e) => {
        e.preventDefault();

        await postRequest('login',form, (res)=>{
            const {status,message} = res;
            setloggedIn(status)

            if(status)
            {
                navigate("../");
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
                            New User <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        );

}

export default LoginPage
