import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="#" onClick={this.props.showHomeView}>Home</a></li>
                        <li><a href="#" onClick={this.props.showLoginView}>Login</a></li>
                        <li><a href="#" onClick={this.props.showRegisterView}>Register</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;