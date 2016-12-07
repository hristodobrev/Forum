import React, {Component} from 'react';

class DeleteAnswerView extends Component {
    render() {
        return (
            <div className="answer-box">
                <form id="answer-form" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label for="answer">You Answer</label>
                        <textarea
                            name="answerText" className="form-control"
                            id="answer" rows="3"
                            disabled="disabled"
                            value={this.props.answerText}/>
                    </div>
                    <div>
                        <input type="submit" value="Delete Answer" className="btn btn-danger"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteAnswerView;
