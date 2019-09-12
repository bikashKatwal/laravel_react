import React, {Component} from 'react';

class SuccessAlert extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.message}
            </div>
        );
    }
}

export default SuccessAlert;
