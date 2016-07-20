import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About page</h2>
                See <Link to="/about/devs">Developers</Link> list.

                {this.props.children}
            </div>
        );
    }
}
