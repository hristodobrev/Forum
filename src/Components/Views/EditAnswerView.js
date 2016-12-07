import React, {Component} from 'react';

class EditAnswerView extends Component {
    render() {
        return (
            <div className="answer-box">
                <form id="answer-form" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label for="answer">You Answer</label>
                        <textarea
                            name="answerText" className="form-control"
                            id="answer" rows="3"
                            value={this.props.answerText}
                            onChange={this.props.onChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Edit Answer" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditAnswerView;
