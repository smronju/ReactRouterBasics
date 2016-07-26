import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from '../Navigation';


export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About page</h2>
                <Navigation />
                See <Link to="/about/devs">Developers</Link> list.

                {this.props.children}
            </div>
        );
    }
}
