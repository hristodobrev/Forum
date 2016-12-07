import React, {Component} from 'react';
import {Link} from 'react-router';

class AnswerNewView extends Component {

    render() {
        return (
            <div className="article-box">
                <form id="article-new" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label for="title">Subject</label>
                        <input name="title" className="form-control" placeholder="Subject" id="title" value={this.props.title} onChange={this.props.onChange} />
                    </div>
                    <div className="form-group">
                        <label for="text">Text</label>
                        <textarea name="text" className="form-control" placeholder="Well..." id="text" rows="3" value={this.props.text} onChange={this.props.onChange} />
                    </div>
                    <div>
                        <input type="submit" value="Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
export default AnswerNewView;
