import React, {Component} from 'react';
import axios from 'axios';
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

class Add extends Component {

    constructor(props) {
        super(props);
        // this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            category_name: '',
            alert_message: ''
        };
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
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/category/store', category);
            this.setState({alert_message: "success"})
        }catch (e) {
            this.setState({alert_message: "error"})
        }
    };


    render() {
        return (
            <div>
                <hr/>
                {this.state.alert_message == "success" ? <SuccessAlert message="Updated Successfully"/> : null}
                {this.state.alert_message == "error" ? <ErrorAlert message="Oops!! Something happened"/> : null}
                <form onSubmit={(e)=>this.handleSubmit(e)}>
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

export default Add;
