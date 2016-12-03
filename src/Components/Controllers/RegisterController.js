import React, {Component} from 'react';
import RegisterView from '../Views/RegisterView';
import UserModel from '../../Models/UserModel';

class RegisterPage extends Component {
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
            .then(registerSuccess)
            .catch(function (err) {
                console.log(err);
            });

        function registerSuccess(data) {
            console.log('Registered successful');
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