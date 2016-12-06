import React, {Component} from 'react';

class HomeView extends Component {
    render() {
        return (
            <section>
                <h1>Home</h1>
                <p>{this.props.message}</p>
            </section>
        );
    }
}

export default HomeView;
