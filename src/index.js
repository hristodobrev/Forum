import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import './index.css';
import "../public/css/main.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './Components/Controllers/HomeController';
import Login from './Components/Controllers/LoginController';
import Register from './Components/Controllers/RegisterController';
import Article from './Components/Controllers/ArticleController';
import ArticleDetails from './Components/Controllers/ArticleDetailsController';
import ArticleNew from './Components/Controllers/ArticleNewController';
import EditAnswer from './Components/Controllers/EditAnswerController';
import Logout from './Components/Controllers/LogoutController';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
            <Route path="article/all" component={Article} />
            <Route path="article/new" component={ArticleNew} />
            <Route path="article/:articleID" component={ArticleDetails} />
            <Route path="answer/edit/:answerId" component={EditAnswer} />
            <Route path="logout" component={Logout} />
        </Route>
    </Router>,
    document.getElementById('wrapper')
);
