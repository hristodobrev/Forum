import React, {Component} from 'react';
import ArticleView from '../Views/ArticleView';
import KinveyRequester from '../../Services/KinveyRequester';
import AnswerModel from '../../Models/AnswerModel';

class ArticleController extends Component {
    constructor(props) {
        super(props);

        this.answerModel = new AnswerModel();

        this.state = {
            articles: [],
            answers: []
        };
    }

    getAllArticles() {
        let _self = this;

        KinveyRequester.get("appdata", "articles")
        .then(function (articlesData) {
            _self.answerModel.getAllAnswers()
                .then(function (answerData) {
                    _self.setState({
                        articles: articlesData,
                        answers: answerData
                    });
                });
        });
    }

    getAritcleById(id) {

    }

    render() {
        return <ArticleView articles={this.state.articles} answers={this.state.answers}/>
    }
}

export default ArticleController;
