import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';
import AppActions from '../../actions/actions';

const Draggable = (props) => {

  const classNames = (props.allowCopy) ? ' allow_copy' : '';

  return (
    <Col xs={props.lana.size}
    onClick={AppActions.addLana.bind(null, props.lana)}
    data-type={props.lana.type}
    className={classNames + '  draggable'}>
    {props.lana.title}
    </Col>
  );
}

Draggable.propTypes = {
  allowCopy: React.PropTypes.bool,
  lana: React.PropTypes.object,
  type: React.PropTypes.oneOf(['component', 'row']).isRequired
}

Draggable.defaultProps = {
  allowCopy: false,
  type: 'component'
}

export default Draggable;