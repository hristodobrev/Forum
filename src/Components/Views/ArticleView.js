import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleView extends Component {
    render() {
        return (
            <section>
            <h1>Articles</h1>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            </div>
            </section>
        );
    }
}

export default ArticleView;
