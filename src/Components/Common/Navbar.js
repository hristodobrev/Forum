import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                {this.props.children}
            </nav>
        );
    }
}

export default Navbar;