import React, {Component} from 'react';
import './RegisterView.css';

class RegisterView extends Component {
    render() {
        return (
            <section id="registerView" onSubmit={this.formSubmit.bind(this)}>
                <h1>Register</h1>
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
                    <p><input type="submit" value="Register"/></p>
                </form>
            </section>
        );
    }

    formSubmit(event) {
        event.preventDefault();
        this.props.registerSubmit(this.usernameField.value, this.passwordField.value);
    }
}

export default RegisterView;