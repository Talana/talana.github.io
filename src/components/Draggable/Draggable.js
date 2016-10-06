import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';

export class DragulaComp extends React.Component {

  render () {

    return (
        <div id="canvasDraggableArea" className="row draggableContent">
          <Col xs={2} className="draggable">draggable 1</Col>
          <Col xs={2} className="draggable">draggable 2</Col>
          <Col xs={2} className="draggable">draggable 3</Col>
          <Col xs={2} className="draggable">draggable 4</Col>
          <Col xs={2} className="draggable">draggable 5</Col>
          <Col xs={2} className="draggable">draggable 6</Col>
        </div>
      );
  }
};

export default DragulaComp;
