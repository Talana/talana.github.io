import React from 'react';
import Draggable from '../dragula/Draggable';
import { Grid } from 'react-bootstrap';
import './Canvas.css';

class Canvas extends React.Component {
  render() {

    return (
      <div className="content">
        <Grid>
          <Draggable/>
        </Grid>
      </div>
    );
  }
}

export default Canvas;