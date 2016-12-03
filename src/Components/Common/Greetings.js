import React, {Component} from 'react';

class Greetings extends Component {
    render() {
        if (this.props.username) {
            return (<span>Hello, {this.props.username}</span>);
        } else {
            return null;
        }
    }
}

export default Greetings;