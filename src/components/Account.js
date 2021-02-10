import React, { useState} from 'react';
import { registerUser } from '../actions/Actions';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';


function Account() {
    
    const history = useHistory();
    const log = history.location;
    const [read, setRead] = useState(true)
    const [name, setName] = useState(log.name);
    const [email, setEmail] = useState(log.email);
    const [password, setPassword] = useState(log.password);
    const [button, setButton] = useState('Change info')
    const dispatch = useDispatch();
    const [message, setMessage] = useState(log.name)


        function handleClick(e) {
            if (read === true){
                setRead(false);
                setButton('Apply change');
            }
            else {
                handleChange(e)
            }
          };
        function handleChange(e) {
            e.preventDefault();
            setButton('Change info');
            setRead(true);
            setMessage(name)
            dispatch(registerUser({name, email, password}));
        };

    return (
        <section className="register">
        <div className="h2-text"><h2>Välkommen {message}</h2></div>
        <div className="register-form">
        <label> Name:     
            <input type="name" placeholder={log.name} value={name} readOnly={read} onChange={(e) => setName(e.target.value)} />
            </label>
            <label> Email:
            <input type="email" placeholder={log.email} value={email} readOnly={read} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label> Password:
            <input type="password" placeholder={log.password} value={password} readOnly={read} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="change-info-button" onClick={handleClick}>{button}</button>
        </div>
    </section>
    )
};


export default Account;
