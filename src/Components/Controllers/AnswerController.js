import React, {Component} from 'react';
import ArticleDetailsView from '../Views/ArticleDetailsView';
import KinveyRequester from '../../Services/KinveyRequester';

class AnswerController extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AnswerView onSubmit={this.postAnswer} />
    }
}

export default AnswerController;
