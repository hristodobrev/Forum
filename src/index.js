import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './Components/Controllers/HomeController';
import Login from './Components/Controllers/LoginController';
import Register from './Components/Controllers/RegisterController';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
        </Route>
    </Router>,
    document.getElementById('wrapper')
);