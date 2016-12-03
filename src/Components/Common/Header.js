import React, {Component} from 'react';
import Greetings from '../Common/Greetings';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Forum</h1>
                <Greetings username={this.props.username}/>
                {this.props.children}
            </header>
        );
    }
}

export default Header;