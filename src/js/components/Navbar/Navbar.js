import React from 'react';
import './navbar.css';

class NavbarComp extends React.Component {
    render() {
        return (
            <div className="myNavbar">
                <div className="myNavbar-brand">{this.props.title}</div>
            </div>
           );
    }
}

export default NavbarComp;
