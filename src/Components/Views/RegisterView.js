import React, {Component} from 'react';

class RegisterView extends Component {
    render() {
        return (
            <section>
                <h1>Register</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={this.props.username}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={this.props.password}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <input className="btn btn-default" type="submit" value="Register"/>
                </form>
            </section>
        );
    }
}

export default RegisterView;