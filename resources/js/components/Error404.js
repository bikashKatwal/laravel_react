import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                404 Page Not found.
                <Link to="/" className="alert-link">Back to Home</Link>
            </div>
        );
    }
}

export default Error404;
