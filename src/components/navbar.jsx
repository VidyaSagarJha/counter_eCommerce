import React, {Component} from 'react';

const Navbar =(props) => {
    
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#" > 
            No of Items <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
            </nav>
        );
    
}

export default Navbar;