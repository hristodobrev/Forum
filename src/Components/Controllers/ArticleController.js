import React, {Component} from 'react';
import ArticleView from '../Views/ArticleView';
import KinveyRequester from '../../Services/KinveyRequester';
import AnswerModel from '../../Models/AnswerModel';

class ArticleController extends Component {
    constructor(props) {
        super(props);

        this.answerModel = new AnswerModel();

        this.state = {
            articles: []
        };

        this.getAllArticles();
    }

    getAllArticles() {
        let _self = this;

        KinveyRequester.get("appdata", "articles")
        .then(function (articlesData) {
            _self.setState({
                articles: articlesData
            });
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return <ArticleView articles={this.state.articles}/>
    }
}

export default ArticleController;
