import React, {Component} from 'react';
import KinveyRequester from '../../Services/KinveyRequester';
import DeleteAnswerView from '../Views/DeleteAnswerView';
import $ from 'jquery';

class DeleteAnswerController extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            answerText: ''
        };

        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.loadAnswerData();
    }

    loadAnswerData() {
        let _self = this;

        let id = this.props.params.answerId;
        KinveyRequester.get('appdata', 'answers?query={"_id":"' + id + '"}')
            .then(function (data) {

                _self.setState({
                    answerText: data[0].answerText,
                    user: data[0].user,
                    date_created: data[0].date_created,
                    article_id: data[0].article_id
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    deleteAnswer(e) {
        e.preventDefault();

        let _self = this;

        let url = `answers/${this.props.params.answerId}`;
        KinveyRequester.delete("appdata", url)
            .then(function (articleData) {
                _self.context.router.push('/article/' + _self.state.article_id);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return <DeleteAnswerView
            onSubmit={this.deleteAnswer}
            answerText={this.state.answerText} />
    }
}

export default DeleteAnswerController;