import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleDeleteView extends Component {

    render() {
        return (
            <div className="article-box">
                <form id="article-new" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Subject</label>
                        <input name="title"
                               className="form-control"
                               id="title"
                               disabled="disabled"
                               value={this.props.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <textarea name="text"
                                  className="form-control"
                                  id="text"
                                  rows="3"
                                  disabled="disabled"
                                  value={this.props.text} />
                    </div>
                    <div>
                        <input type="submit" value="Delete Article" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        );
    }
}
export default ArticleDeleteView;