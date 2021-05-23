import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render() {
        return (
             <nav className="navbar navbar-light bg-primary">
                 <Link className="navbar-brand text-white" to="/">Amar Manager</Link>
             </nav>
        );
    }
}

export default Header;