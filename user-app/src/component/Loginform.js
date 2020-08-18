import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';

const initialProject = {
    username: '', 
    password: ''
}

function LoginForm(){
    const [formValue, setLoginForm] = useState(initialProject);
    const { push } = useHistory();

    

    const handleChange = e => {
        setLoginForm({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        // axios
        .post(`http://localhost:8000/api/auth/login`, formValue)
            .then( res => {
                console.log(res.data)
               localStorage.setItem('token', res.data.token)
               push("/dashboard")
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>User login</label>
                <input 
                    type="text"
                    name="username"
                    value={formValue.username}
                    onChange={handleChange}
                    placeholder="place your username"
                />
                <label>Action Notes</label>
                <input 
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                    placeholder="place your password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoginForm;