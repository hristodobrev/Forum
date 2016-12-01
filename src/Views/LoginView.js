import React, {Component} from 'react';
import './LoginView.css';

class LoginView extends Component {
    render() {
        return (
            <section id="loginView" onSubmit={this.formSubmit.bind(this)}>
                <h1>Login</h1>
                <form>
                    <label>
                        <p>Username: </p>
                        <input type="text" required
                               ref={ e => this.usernameField = e }/>
                    </label>
                    <label>
                        <p>Password: </p>
                        <input type="password" required
                               ref={ e => this.passwordField = e }/>
                    </label>
                    <p><input type="submit" value="Login"/></p>
                </form>
            </section>
        );
    }

    formSubmit(event) {
        event.preventDefault();
        this.props.loginSubmit(this.usernameField.value, this.passwordField.value);
    }
}

export default LoginView;