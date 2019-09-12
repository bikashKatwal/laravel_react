import React, {Component} from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

import {Link} from 'react-router-dom';

class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
            alert_message: ''
        };
    }

    async handlePageChange(pageNumber) {
        // this.setState({activePage: pageNumber});
        const response = await axios.get('http://127.0.0.1:8000/api/category?page=' + pageNumber);
        this.setState({
            categories: response.data.data,
            activePage: response.data.current_page,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total
        });

        console.log("Paginate", this.state.itemsCountPerPage);
    }

    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:8000/api/category');
        this.setState({
            categories: response.data.data,
            activePage: response.data.current_page,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total
        });
    }

    async onHandleDelete(id) {
        try {
            const response = await axios.delete("http://127.0.0.1:8000/api/category/delete/" + id);
            const category = this.state.categories.filter((cat) => cat.id !== id);
            this.setState({
                categories: category,
                alert_message: "success"
            });
        } catch (e) {
            this.setState({alert_message: "error"});
        }
    }

    renderCategoryList() {
        return this.state.categories.map((category, i) => {
            return (
                <tr key={category.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{category.name}</td>
                    <td>{category.active == 1 ? "Active" : "InActive"}</td>
                    <td>{category.created_at}</td>
                    <td>{category.updated_at}</td>

                    <td>
                        <Link to={`/category/edit/${category.id}`}>Edit</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
                        <a href="#" onClick={() => this.onHandleDelete(category.id)}>Delete</a></td>
                </tr>
            );
        });
    }


    render() {
        return (
            <div>
                <hr/>
                {this.state.alert_message == "success" ? <SuccessAlert message="Deleted Successfully"/> : null}
                {this.state.alert_message == "error" ? <ErrorAlert message="Oops!! Something happened"/> : null}
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCategoryList()}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={(e) => this.handlePageChange(e)}
                        itemClass="page-item"
                        linkClass='page-link'
                    />
                </div>
            </div>
        );
    }
}

export default Listing;
