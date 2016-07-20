import React, { Component } from 'react';
import Layout from './Layout';
import Home from './Home';
import About from './Pages/About';
import Developers from './Pages/About/Developers';
import Contact from './Contact';
import { Router, Route, hashHistory } from 'react-router'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About}>
                        <Route path="/about/devs" component={Developers} />
                    </Route>
                    <Route path="/contact" component={Contact} />
                </Router>
            </Layout>
        );
    }
}
