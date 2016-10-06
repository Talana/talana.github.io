import * as React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Dragula from 'react-dragula';
import './draggable.css';

export class DragulaComp extends React.Component {
  render () {
    return (
        <div className="row dragula-section draggableArea" ref={this.dragulaDecorator}>
          <Col xs={2} className="draggable">Swap item #1</Col>
          <Col xs={2} className="draggable">Swap item #2</Col>
          <Col xs={2} className="draggable">Swap item #3</Col>
          <Col xs={2} className="draggable">Swap item #4</Col>
          <Col xs={2} className="draggable">Swap item #5</Col>
          <Col xs={2} className="draggable">Swap item #6</Col>
        </div>
      );
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        copy: function(el, source) {
          // if source is widget picker we copy
          if (source.classList.contains("allow_copy")) {
            return true;
          }
        },
        moves: function(el, container, handle) {
          return el.classList.contains('draggableArea') || el.classList.contains('draggable');
        },
        accepts: function(el, target, source, sibling) {
          // console.log("target.classList", sibling.classList);
          return target.classList.contains("dragula-section");
        },
        direction: 'horizontal', // Y axis is considered when determining where an element would be dropped
        // copySortSource: true,             // elements in copy-source containers can be reordered
        removeOnSpill: true, // spilling will `.remove` the element, if this is true
      };
      Dragula([componentBackingInstance], options);
    }
  };
};

export default DragulaComp;