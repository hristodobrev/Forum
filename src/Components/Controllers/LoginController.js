import React, {Component} from 'react';
import LoginView from '../Views/LoginView';
import UserModel from '../../Models/UserModel';

import observer from '../../Utilities/observer';

class LoginPage extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

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
        .then(loginSuccess.bind(this))
        .catch(function (err) {
            console.log(err);
        });

        function loginSuccess(data) {
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('authToken', data._kmd.authtoken);
            sessionStorage.setItem('userId', data._id);

            observer.onSessionUpdate();

            this.context.router.push('/article/all'); // Redirect to the articles page
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
