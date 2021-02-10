import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/Actions'
import { useHistory } from 'react-router-dom';




function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();

     const handleSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/account',
            name: name,
            email: email,
            password: password,

        })
        dispatch(registerUser({name, email, password}));

        
        
    }
        return (
            <section className="register">
            <div className="h2-text"><h2>Registrera dig för ett konto</h2></div>
            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <label> Name:
                <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label> Email:
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label> Password:
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button className="submit-button" type="submit">Sign up</button>
            </form>
        </section>
        )
    }


export default Registration;