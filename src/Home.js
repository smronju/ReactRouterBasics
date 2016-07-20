import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home page</h2>

                <ul role="nav">
                    <li>
                        <Link to="/about">About</Link>
                        <ul>
                            <li><Link to="/about/devs">Developers</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
        );
    }
}
