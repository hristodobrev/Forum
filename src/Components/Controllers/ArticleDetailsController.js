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
            text: '',
        };

        this.onChange = this.onChange.bind(this);
        this.getAritcleById();
    }

    postAnswer(e) {
        e.preventDefault();

        let _self = this;

        let data = {
            text: this.state.text,
            date_created: new Date(),
            user: this.state.user,
            article_id: this.state.article_id
        };

        KinveyRequester.post("appdata", "answers", data)
        .then(function (articleData) {
            // console.log(articleData);

            $('.answers')
            .append(`
                <div class="list-group answer">
                    <p class="list-group-item list-group-item-action">${articleData.text}</p>
                    <p class="list-group-item list-group-item-action">
                        Created By: ${articleData.user}
                    </p>
                    <p class="list-group-item list-group-item-action">
                        Date Created: ${articleData.date_created}
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
        //console.log(newState);
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
