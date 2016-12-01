import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let Person = React.createClass({
    render: function () {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
});

class Rectangle extends React.Component {
    render() {
        return (
            <div>
                <p>Width: {this.props.width}</p>
                <p>Height: {this.props.height}</p>
            </div>
        )
    }
}

let Counter = React.createClass({
    getInitialState: function () {
        return {
            count: Number(this.props.start)
        }
    },
    increment: function () {
        this.setState({
            count: this.state.count + 1
        });
    },
    render: function () {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>
                    <button onClick={this.increment}>+</button>
                </p>
            </div>
        )
    }
});

// ReactDOM.render(
//     <Person name="Pencho" age="19"/>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Rectangle width="20" height="15"/>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Counter start="1"/>,
    document.getElementById('root')
);

