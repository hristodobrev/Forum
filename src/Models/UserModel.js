import KinveyRequester from '../Services/KinveyRequester';

class UserModel {
    login(username, password) {
        let data = {
            username,
            password
        };

        return KinveyRequester.post('user', 'login', data);
    }

    register(username, password) {
        let data = {
            username,
            password
        };

        return KinveyRequester.post('user', '', data);
    }
    
    logout(authToken) {
        return KinveyRequester.logout(authToken);
    }
}

export default UserModel;