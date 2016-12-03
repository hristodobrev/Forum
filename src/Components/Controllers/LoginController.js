import React, {Component} from 'react';
import LoginView from '../Views/LoginView';
import UserModel from '../../Models/UserModel';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.model = new UserModel();

        this.state = {
            username: '',
            password: ''
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(event) {
        event.preventDefault();

        this.model.login(this.state.username, this.state.password)
            .then(loginSuccess)
            .catch(function (err) {
                console.log(err);
            });

        function loginSuccess(data) {
            console.log('Logged in successful');
        }
    }

    onChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return <LoginView
            onSubmit={this.login}
            onChange={this.onChange}
            username={this.state.username}
            password={this.state.password}
        />
    }
}

export default LoginPage;