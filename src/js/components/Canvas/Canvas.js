import React from 'react';
import { Col } from 'react-bootstrap';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import './canvas.css';

const lanas = () => {
    return { lanas: AppStore.store.lanas }
}

const Canvas = (props) => {
    const canvasStyle = {
        padding: 16,
        minHeight: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
    return (
        <div className="content">
          <Col xs={12} sm={9} id="canvasDraggableArea" className="row draggableContent canvasArea" style={canvasStyle}>
          </Col>
        </div>
    );
}

export default StoreWatchMixin(Canvas, lanas);
