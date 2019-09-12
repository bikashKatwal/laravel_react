import React, {Component} from 'react';
import {Route, Link} from "react-router-dom"
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

class Index extends Component {
    render() {
        return (

                <div className="mt-2 mb-2">
                    <Link to="/category" className="btn btn-primary ">Listing</Link>&nbsp;
                    <Link to="/category/Add" className="btn btn-primary">Add</Link>

                    <Route path="/category" exact component={Listing} />
                    <Route path="/category/add" exact component={Add} />
                    <Route path="/category/edit/:id" exact component={Edit} />
                </div>

        );
    }
}

export default Index;
