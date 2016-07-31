import React, { Component } from 'react';

class Developers extends Component {
    render () {
        return (
            <h1>Developer of this tutorial is {this.props.params.name}</h1>
        )
    }
}

export default Developers;
