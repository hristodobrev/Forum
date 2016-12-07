import React, {Component} from 'react';
import EditAnswerView from '../Views/EditAnswerView';
import KinveyRequester from '../../Services/KinveyRequester';

class EditAnswerController extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            answerText: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setInitialState();
    }

    setInitialState() {
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
            }) ;
    }

    onSubmit(e) {
        e.preventDefault();

        let _self = this;

        let data = {
            answerText: this.state.answerText,
            date_created: new Date(),
            user: this.state.user,
            article_id: this.state.article_id
        };

        KinveyRequester.put('appdata', 'answers/' + this.props.params.answerId, data)
            .then(function (data) {
                let url = `/article/${data.article_id}`;
                _self.context.router.push(url); // Redirect to the articles page
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    onChange(event) {
        event.preventDefault();

        let newState = {};
        newState[event.target.name] = event.target.value;

        this.setState(newState);
    }

    render() {
        return <EditAnswerView onChange={this.onChange} onSubmit={this.onSubmit} answerText={this.state.answerText}/>
    }
}

export default EditAnswerController;
