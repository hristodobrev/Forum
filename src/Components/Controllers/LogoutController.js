import React, {Component} from 'react';
import UserModel from '../../Models/UserModel';

import observer from '../../Utilities/observer';

class LogoutController extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.model = new UserModel();
        this.logout();
    }

    logout() {
        let _self = this; /////// FUCK YOUUUUUUUUUUUUUUUUU
        this.model.logout(sessionStorage.getItem('authToken'))
            .then(function (data) {
                sessionStorage.clear();

                observer.onSessionUpdate();

                _self.context.router.push('/');
            });
    }

    render() {
        return (
            <section>
                <h1>Logout Page</h1>
            </section>
        );
    }
}

export default LogoutController;