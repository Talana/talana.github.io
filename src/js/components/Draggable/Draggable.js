import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';
import AppActions from '../../actions/actions';

// export class Draggable extends React.Component {

//   render () {
//     let sizeMapper = {
//       component: 12,
//       row: 12
//   };

//   let label = this.props.type;
//   let size = sizeMapper[this.props.type];
//   var classNames = "draggable"
//   classNames += this.props.allowCopy ? ' allow_copy' : '';

//   return (

//       );
//   }
// };

// export default Draggable;

const Draggable = (props) => {

  return (
    <Col xs={props.lana.size}
    onClick={AppActions.addLana.bind(null, props.lana)}
    data-type={props.lana.type}
    className={props.classNames + ' draggable'}>
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