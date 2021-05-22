import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
             <nav className="navbar navbar-light bg-primary">
                 <a className="navbar-brand text-white" href="#">Amar Manager</a>
             </nav>
        );
    }
}

export default Header;