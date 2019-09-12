import React, {Component} from 'react';
import {Route, Link} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Category from "./category";
import Add from "./category/Add";
import Edit from "./category/Edit";

class Header extends Component {
    render() {
        return (

                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link active"  to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/category">Category</Link>
                                </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                            </form>
                        </div>
                    </nav>

                    <nav className="nav">



                    </nav>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/category" exact component={Category}/>

                    <Route path="/category/add" exact component={Category} />
                    <Route path="/category/edit/:id" exact component={Category} />
                </div>


        );
    }
}

export default Header;
