import React, {Component} from 'react';
import ArticleDetailsView from '../Views/ArticleDetailsView';
import KinveyRequester from '../../Services/KinveyRequester';
import AnswerModel from '../../Models/AnswerModel';

class ArticleDetailsController extends Component {
    constructor(props) {
        super(props);

        this.answerModel = new AnswerModel();

        this.state = {
            article: [],
            answers: []
        };

        this.getAritcleById();
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

    render() {
        return <ArticleDetailsView article={this.state.article} answers={this.state.answers}/>
    }
}

export default ArticleDetailsController;
