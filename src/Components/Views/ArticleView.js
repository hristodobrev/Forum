import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleView extends Component {
    render() {
        let articlesList = this.props.articles.map((a) => {
            return (
                <div className="list-group" key={a._id}>
                    <a href="#" className="list-group-item list-group-item-action">{a.title}</a>
                    <a href="#" className="list-group-item list-group-item-action">Created By: {a.user}</a>
                    <a href="#" className="list-group-item list-group-item-action">Date Created: {a.date_created}</a>
                </div>
            );
        });

        return (
            <section>
            <h1>Articles</h1>
                {articlesList}
            </section>
        );
    }
}

export default ArticleView;
