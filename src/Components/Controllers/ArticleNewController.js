import React, {Component} from 'react';
import ArticleNewView from '../Views/ArticleNewView';
import KinveyRequester from '../../Services/KinveyRequester';
import $ from 'jquery';

class ArticleNewController extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            user: sessionStorage.getItem('username'),
            title: '',
            text: ''
        };

        this.onChange = this.onChange.bind(this);
        this.postArticle = this.postArticle.bind(this);
    }

    postArticle(e) {
        e.preventDefault();

        let _self = this;

        let data = {
            title: this.state.title,
            date_created: new Date(),
            user: this.state.user,
            text: this.state.text
        };

        KinveyRequester.post("appdata", "articles", data)
        .then(function (articleData) {
            _self.context.router.push('/article/all');
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    onChange(event) {

        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return <ArticleNewView
                onSubmit={this.postArticle}
                onChange={this.onChange}
                title={this.state.title}
                text={this.state.text}
                />
    }
}

export default ArticleNewController;
