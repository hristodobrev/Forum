import React, {Component} from 'react';
import KinveyRequester from '../../Services/KinveyRequester';
import ArticleDeleteView from '../Views/ArticleDeleteView';
import $ from 'jquery';

class ArticleDeleteController extends Component {
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

        this.deleteArticle = this.deleteArticle.bind(this);
        this.loadArticleData();
    }

    loadArticleData() {
        let _self = this;
        let uri = `articles/?query={"_id":"${this.props.params.articleId}"}`;
        KinveyRequester.get('appdata', uri)
            .then(function (data) {
                _self.setState({
                    user: data[0].user,
                    title: data[0].title,
                    text: data[0].text
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    deleteArticle(e) {
        e.preventDefault();
        let _self = this;

        console.log('Article to be deleted...');
        let articleId = this.props.params.articleId
        let url = `answers?query={"article_id":"${articleId}"}`;
        KinveyRequester.delete('appdata', url)
            .then(function (answersData) {
                KinveyRequester.delete('appdata', `articles/${articleId}`)
                    .then(function (articleData) {
                        _self.context.router.push('/article/all');
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
        return <ArticleDeleteView
            onSubmit={this.deleteArticle}
            title={this.state.title}
            text={this.state.text}
        />
    }
}

export default ArticleDeleteController;