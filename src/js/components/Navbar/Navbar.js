import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import logo from '../../../images/Talana_white_logo.png';
import './navbar.css';

class NavbarComp extends React.Component {

    render() {
        const imageStyle = {
            height: 30,
            margin: '4px 0px 4px 0px'
        };
        return (
            <div className="myNavbar">
                <Grid>
                    <Col xs={2} className="myNavbar-brand">
                        <img src={logo} alt="Logo" style={imageStyle}/>
                    </Col>
                </Grid>
            </div>
           );
    }
}

export default NavbarComp;
