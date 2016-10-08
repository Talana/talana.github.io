import React from 'react';
import { Col } from 'react-bootstrap';
import AppStore from '../../stores/app-store';
import Draggable from '../Draggable/Draggable';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import './canvas.css';

const lanas = () => {
    return { lanas: AppStore.getLanas() }
}

const Canvas = (props) => {

    let lanas = props.lanas.map(lana => {
        return <Draggable key={lana.id} type="row" lana={lana}/>
    })
    return (
        <div className="content">
          <Col xs={12} sm={9} id="canvasDraggableArea" className="row draggableContent">
              {lanas}
          </Col>
        </div>
    );
}

export default StoreWatchMixin(Canvas, lanas);
