import React, {Component} from 'react';
import {Link} from 'react-router';
import AnswerView from './AnswerView';

class ArticleDetailsView extends Component {

    constructor() {
        super();
        this.state = {
            childVisible: false
        };
    }

    onClick() {
        this.setState({
            childVisible: !this.state.childVisible
        });
    }


    render() {
        let answersList = this.props.answers.map((a) => {
            if (a.user == sessionStorage.getItem('username')) {
                let link = `/answer/edit/${a._id}`;
                return (
                    <div className="list-group answer" key={a._id}>
                        <p className="list-group-item list-group-item-action">{a.text}</p>
                        <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                        <p className="list-group-item list-group-item-action">
                            Date Created: {a.date_created}
                            <span className="right"><Link to={link}>Edit</Link></span>
                        </p>
                    </div>
                );
            } else {
                return (
                    <div className="list-group answer" key={a._id}>
                        <p className="list-group-item list-group-item-action">{a.text}</p>
                        <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                        <p className="list-group-item list-group-item-action">Date Created: {a.date_created}</p>
                    </div>
                );
            }
        });

        if (answersList.length === 0) {
            answersList = <p>No Answers</p>
        }

        return (
            <section>
                <h1>{this.props.article.title}</h1>
                <p>Date Created: {this.props.article.date_created}</p>
                <p>Created by: {this.props.article.user}</p>
                <h2>Answers</h2>
                <div className="answers">{answersList}</div>
                <a className="add-answer btn btn-default" onClick={this.onClick.bind(this)}>Add Answer</a>
                {
                  this.state.childVisible
                    ? <AnswerView
                        onChange={this.props.onChange}
                        onSubmit={this.props.onSubmit}
                        text={this.props.text}
                       />
                    : null
                }
            </section>
        );
    }
}

export default ArticleDetailsView;
