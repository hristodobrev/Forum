import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './Components/Common/Navbar';
import Header from './Components/Common/Header';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: ''
        };
    }
    
    render() {
        let navbar;
        
        if(!this.state.isLoggedIn) {
            navbar = (
                <Navbar>
                    <Link to="/" >Home</Link>
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>
                </Navbar>
            );
        } else {
            navbar = (
                <Navbar>
                    <Link to="/" >Home</Link>
                    <Link to="/logout" >Logout</Link>
                </Navbar>
            );
        }

        return (
            <div className="container">
                <Header isLoggedIn={this.state.isLoggedIn} username={this.state.username}>
                    {navbar}
                </Header>
                {this.props.children}
            </div>
        );
    }
}

export default App;