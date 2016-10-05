import { Grid,Navbar } from 'react-bootstrap';
import React from 'react';
import './Navbar.css';

class NavbarComp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Talana</a>
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavbarComp;