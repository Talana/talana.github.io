import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';

export class DraggableElement extends React.Component {

  render () {
    let sizeMapper = {
        component: 12,
        row: 12
    };

    let label = this.props.type;
    let size = sizeMapper[this.props.type];
    var classNames = "draggable"
    classNames += this.props.allowCopy ? ' allow_copy' : '';

    return (
        <Col xs={size} data-type={this.props.type} className={classNames}>{label}</Col>
      );
  }
};

DraggableElement.propTypes = {
  allowCopy: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['component', 'row']).isRequired
}

DraggableElement.defaultProps = {
  allowCopy: false,
  type: 'component'
}

export default DraggableElement;

