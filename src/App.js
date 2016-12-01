import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

import Header from './Components/Header';
import Footer from './Components/Footer';

import KinveyRequester from './KinveyRequester';

import $ from 'jquery';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header
                    showHomeView={this.showHomeView.bind(this)}
                    showLoginView={this.showLoginView.bind(this)}
                    showRegisterView={this.showRegisterView.bind(this)}
                />
                <div id="loadingBox">Loading</div>
                <div id="infoBox">Info</div>
                <div id="errorBox">Error</div>
                <main id="main">
                </main>
                <Footer />
            </div>
        );
    }

    // Views Functions

    showView(view) {
        ReactDOM.render(
            view,
            document.getElementById('main')
        );
    }

    showHomeView() {
        this.showView(
            <HomeView />
        );
    }

    showLoginView() {
        this.showView(
            <LoginView loginSubmit={this.loginSubmit.bind(this)} />
        );
    }
    
    showRegisterView() {
        this.showView(
            <RegisterView registerSubmit={this.registerSubmit.bind(this)} />
        );
    }

    // Notification Functions

    showInfo(msg) {
        $('#infoBox').text(msg).fadeIn();
    }

    // Request Functions

    loginSubmit(username, password) {
        KinveyRequester.login(username, password)
            .then(loginSuccessful.bind(this));

        function loginSuccessful(data) {
            this.showInfo('Login Successful');
        }
    }

    registerSubmit(username, password) {
        console.log('Register in with: ' + username + ', ' + password);
    }
}

export default App;