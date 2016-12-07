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
            text: ''
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
                console.log(data[0].text);
                _self.setState({
                    text: data[0].text,
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

        // let data = {
        //     text: this.state.text,
        //     user: this.state.user,
        //     date_created: this.state.date_created,
        //     article_id: this.state.article_id
        // };



        let data = {
            text: this.state.text,
            date_created: new Date(),
            user: this.state.user,
            article_id: this.state.article_id
        };

        let _self = this;

        KinveyRequester.put('appdata', 'answers/' + this.props.params.answerId, data)
            .then(function (data) {
                //console.log('Edited successfully');
                let url = "article/" + data.article_id;
                _self.context.router.push(url);
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
        return <EditAnswerView onChange={this.onChange} onSubmit={this.onSubmit} text={this.state.text}/>
    }
}

export default EditAnswerController;