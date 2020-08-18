import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import axios from 'axios'

const initialVal = {
    name: '',
    username:'',
    password: ''
}

function RegisterForm(props){

    // const { push } = useHistory();
    const [formValues, setForm]=useState(initialVal);
   

    

    const onInputChange = e => {
       const { name, value } = e.target
        setForm({
            ...formValues,
            [name]: value
        })
    };


    const newUserSubmit = e => {
        e.preventDefault()
        // axiosWithAuth()
        axios
        .post(`http://localhost:8000/api/auth/register`, formValues)
        .then(res => {
            setForm(res.data)
            console.log(res.data)
            // push('/')
        })
        .catch(err =>{
            console.log(err)
        })

    }


    return (
        <div>
            <h2>RegisterForm</h2>
        <form>
            <label htmlFor='name'>Name</label>
             <input
                name='name'

                onChange={onInputChange}
                type='text'
                placeholder='Please enter your first name'
            />
       
            <label htmlFor='user_name'>Username:</label>
            <input
                name='username'
                onChange={onInputChange}
                type='text'
                placeholder='Please enter a username'
            />
      

      
            <label htmlFor='password'>Password:</label>
            <input
                name='password'
                onChange={onInputChange}
                type='password'
                placeholder='Please enter a password'
            />
        <button onClick={newUserSubmit}>Submit</button>
        </form>
      </div>
    )
}

export default RegisterForm;