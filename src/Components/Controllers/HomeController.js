import React, {Component} from 'react';
import HomeView from '../Views/HomeView';

class HomePage extends Component {
    render() {
        let message = 'You can login or register to post new articles and answer to existing ones.';

        let username = sessionStorage.getItem('username');
        if (username) {
            message = `Welcome, ${username}`;
        }

        return <HomeView message={message}/>
    }
}

export default HomePage;