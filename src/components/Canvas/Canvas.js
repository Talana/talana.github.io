import React from 'react';
import DraggableArea from '../Draggable/Draggable';
import { Grid } from 'react-bootstrap';
import './canvas.css';

class Canvas extends React.Component {
  render() {

    return (
      <div className="content">
        <Grid>
          <DraggableArea/>
        </Grid>
      </div>
    );
  }
}

export default Canvas;
