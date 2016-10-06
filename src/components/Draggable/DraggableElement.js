import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';

export class DragulaElement extends React.Component {
  render () {
    return (
        <Col xs={2} className="draggable">Swap item {this.props.id}</Col>
      );
  }
};

export default DragulaElement;
