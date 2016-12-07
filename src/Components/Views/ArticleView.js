import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleView extends Component {
    render() {
        let articlesList = this.props.articles.map((a) => {
            let detailsUrl = "/article/" + a._id;
            let deleteUrl = "/article/delete/" + a._id;
            let editUrl = "/article/edit/" + a._id;

            if (a.user == sessionStorage.getItem('username')) {
                return (
                    <div className="list-group" key={a._id}>
                        <h2 className="list-group-item list-group-item-action">{a.title}</h2>
                        <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                        <p className="list-group-item list-group-item-action">Date Created: {a.date_created}
                            <span className="right">
                                <Link className="btn btn-xs btn-warning" to={detailsUrl}>View Details</Link>
                                <Link className="btn btn-xs btn-info" to={editUrl}>Edit</Link>
                                <Link className="btn btn-xs btn-danger" to={deleteUrl}>Delete</Link>
                            </span>
                        </p>

                    </div>
                );
            } else {
                return (
                    <div className="list-group" key={a._id}>
                        <h2 className="list-group-item list-group-item-action">{a.title}</h2>
                        <p className="list-group-item list-group-item-action">Created By: {a.user}</p>
                        <p className="list-group-item list-group-item-action">Date Created: {a.date_created}
                            <Link className="btn btn-xs btn-warning right" to={detailsUrl}>View Details</Link>
                        </p>

                    </div>
                );
            }
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
