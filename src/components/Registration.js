import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userReducer from '../reducers/userReducer';




function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

     const handleSubmit = (e) => {
        e.preventDefault();

        //TODO: Här ska vi skicka med data men vet inte vad ännu
        dispatch();
    }

    return (
        <section className="register">
            <h2>Registrera dig för ett konto</h2>
            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="submit-button" type="submit">Sign me up!</button>
            </form>
        </section>
    )
}

export default Registration;
