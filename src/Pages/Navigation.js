import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
    return (
        <ul role="nav">
            <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
            <li>
                <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
                <ul>
                    <li><Link to="/about/dev/Ronju" activeStyle={{ color: 'red' }}>Developer</Link></li>
                </ul>
            </li>
            <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
        </ul>
    )
}

export default Navigation;
