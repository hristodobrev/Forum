import React, {Component} from 'react';
import ArticleView from '../Views/ArticleView';
import KinveyRequester from '../../Services/KinveyRequester';

class ArticleController extends Component {
    constructor(props) {
        super(props);
        this.articles();
    }

    articles () {
        KinveyRequester.get("/articles")
        .then(function (data) {
            console.log(data);
        });
    }
    render() {
        return <ArticleView/>
    }
}

export default ArticleController;
