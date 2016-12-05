import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './Components/Common/Navbar';
import Header from './Components/Common/Header';

import observer from './Utilities/observer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: ''
        };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        if(sessionStorage.getItem('authToken')) {
            this.setState({
                isLoggedIn: true,
                username: sessionStorage.getItem('username')
            });
        } else {
            this.setState({
                isLoggedIn: false,
                username: ''
            });
        }
    }

    render() {
        let navbar;

        if(!this.state.isLoggedIn) {
            navbar = (
                <Navbar>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/login" className="btn btn-default">Login</Link>
                    <Link to="/register" className="btn btn-default">Register</Link>
                </Navbar>
            );
        } else {
            navbar = (
                <Navbar>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/article/new" className="btn btn-default">New Topic</Link>
                    <Link to="/article/all" className="btn btn-default">All Topics</Link>
                    <Link to="/logout" className="btn btn-default">Logout</Link>
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
