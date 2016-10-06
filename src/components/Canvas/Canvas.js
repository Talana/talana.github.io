import React from 'react';
import Draggable from '../Draggable/Draggable';
import { Grid } from 'react-bootstrap';
import './canvas.css';

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
