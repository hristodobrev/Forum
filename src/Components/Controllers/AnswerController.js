import React, {Component} from 'react';
import ArticleDetailsView from '../Views/ArticleDetailsView';
import KinveyRequester from '../../Services/KinveyRequester';

class AnswerController extends Component {
    constructor(props) {
        super(props);
    }

    postAnswer(e) {
        e.preventDefault();

        let _self = this;
        console.log('posting...');
        KinveyRequester.post("appdata", "answers")
        .then(function (articlesData) {
            console.log(articlesData);
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return <AnswerView onSubmit={this.postAnswer} />
    }
}

export default AnswerController;
