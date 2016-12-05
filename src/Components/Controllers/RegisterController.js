import React, {Component} from 'react';

import RegisterView from '../Views/RegisterView';
import UserModel from '../../Models/UserModel';

import observer from '../../Utilities/observer';

class RegisterPage extends Component {
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

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    register(event) {
        event.preventDefault();

        this.model.register(this.state.username, this.state.password)
            .then(registerSuccess.bind(this))
            .catch(function (err) {
                console.log(err);
            });

        function registerSuccess(data) {
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
        return <RegisterView
            onSubmit={this.register}
            onChange={this.onChange}
            username={this.state.username}
            password={this.state.password}
        />
    }
}

export default RegisterPage;