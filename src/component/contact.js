import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Submit</button>
        </div>
    )
}

export default Contact;