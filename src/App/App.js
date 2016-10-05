import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import DragulaComp from '../dragula/DragulaApp';
import NavbarComp from '../components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp/>
        <Grid>
          <DragulaComp/>
        </Grid>
      </div>
    );
  }
}

export default App;