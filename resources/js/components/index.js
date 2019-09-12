import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";


function Index() {
    return (
        <div className="container">
            <Header/>
            <Footer/>
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Router><Index/></Router>, document.getElementById('root'));
}
