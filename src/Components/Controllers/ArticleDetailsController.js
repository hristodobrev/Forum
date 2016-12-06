import React, {Component} from 'react';
import ArticleDetailsView from '../Views/ArticleDetailsView';
import KinveyRequester from '../../Services/KinveyRequester';
import AnswerModel from '../../Models/AnswerModel';
import $ from 'jquery';

class ArticleDetailsController extends Component {
    constructor(props) {
        super(props);

        this.answerModel = new AnswerModel();

        this.state = {
            article: [],
            answers: [],
            user: sessionStorage.getItem('username'),
            article_id: this.props.params.articleID,
            date_created: new Date(),
            text: '',
        };

        this.onChange = this.onChange.bind(this);
        this.getAritcleById();
    }

    postAnswer(e) {
        e.preventDefault();


        let _self = this;
        console.log('posting...');
        KinveyRequester.post("appdata", "answers", _self.state)
        .then(function (articlesData) {
            console.log(articlesData);

            $('.answers')
            .append(`
                <div class="list-group answer">
                    <p class="list-group-item list-group-item-action">${_self.state.text}</p>
                    <p class="list-group-item list-group-item-action">
                        Created By: ${_self.state.user}
                    </p>
                    <p class="list-group-item list-group-item-action">
                        Date Created: ${_self.state.date_created}
                    </p>
                </div>
                `);

        })
        .catch(function (err) {
            console.log(err);
        });
    }

    getAritcleById() {
        let _self = this;
        KinveyRequester.get("appdata", `articles?query={"_id": "${this.props.params.articleID}"}`)
            .then(function (article) {

                _self.answerModel.getAnswersByArticleId(article[0]._id)
                    .then(function (answers) {
                        _self.setState({
                            article: article[0],
                            answers: answers
                        });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    onChange(event) {

        let newState = {};
        newState[event.target.name] = event.target.value;
        console.log(newState);
        this.setState(newState);
    }

    render() {
        return <ArticleDetailsView
                onSubmit={this.postAnswer.bind(this)}
                article={this.state.article}
                answers={this.state.answers}
                onChange={this.onChange}
                text={this.state.text}
                />
    }
}

export default ArticleDetailsController;
