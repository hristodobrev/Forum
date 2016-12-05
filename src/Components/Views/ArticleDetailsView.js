import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleDetailsView extends Component {

    render() {
        let answersList = this.props.answers.map((a) => {
            return (
                <div className="list-group answer" key={a._id}>
                    <p className="list-group-item list-group-item-action">{a.text}</p>
                    <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                    <p className="list-group-item list-group-item-action">Date Created: {a.date_created}</p>
                </div>
            );
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
            </section>
        );
    }
}

export default ArticleDetailsView;

