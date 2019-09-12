import React, {Component} from 'react';
import axios from 'axios';
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

class Edit extends Component {

    constructor(props) {
        super(props);
        // this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            category_name: '',
            alert_message: ''
        };
    }

    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:8000/api/category/edit/' + this.props.match.params.id);
        console.log("Edit", response);
        this.setState({
            category_name: response.data.name
        });
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const category = {
            categoryName: this.state.category_name
        };
        try {
            const response = await axios.patch('http://127.0.0.1:8000/api/category/update/' + this.props.match.params.id, category);
            this.setState({alert_message: "success"})
        } catch (error) {
            this.setState({alert_message: "error"})
        }
    };


    render() {
        return (
            <div>
                <hr/>
                {this.state.alert_message == "success" ? <SuccessAlert message="Updated Successfully"/> : null}
                {this.state.alert_message == "error" ? <ErrorAlert message="Oops!! Something happened"/> : null}

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text" className="form-control" id="category_name"
                               placeholder="Enter category"
                               value={this.state.category_name}
                               onChange={(e) => this.onChangeCategoryName(e)}
                            // onChange={this.onChangeCategoryName}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Edit;
