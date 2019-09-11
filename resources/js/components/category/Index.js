import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Add from "./Add";
import Listing from "./Listing";

class Index extends Component {
    render() {
        return (
            <Router>
                <div className="mt-2 mb-2">
                    <Link to="/category" className="btn btn-primary ">Listing</Link>&nbsp;
                    <Link to="/category/Add" className="btn btn-primary">Add</Link>

                    <Route path="/category" exact component={Listing} />
                    <Route path="/category/add" exact component={Add} />
                </div>
            </Router>
        );
    }
}

export default Index;
