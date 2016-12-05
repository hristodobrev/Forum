import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleView extends Component {
    render() {
        let articlesList = this.props.articles.map((a) => {
            let url = "/article/" + a._id;
            return (
                <div className="list-group" key={a._id}>
                    <h2 className="list-group-item list-group-item-action">{a.title}</h2>
                    <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                    <p className="list-group-item list-group-item-action">Date Created: {a.date_created}
                        <Link className="right" to={url}>View Details</Link>
                    </p>

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
