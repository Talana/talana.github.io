import React from 'react';
import { Grid } from 'react-bootstrap';
import AppStore from '../../stores/app-store';
import Draggable from '../Draggable/Draggable';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import './canvas.css';

const lanas = () => {
    return { lanas: AppStore.getLanas() }
}

const Canvas = (props) => {

  let lanas = props.lanas.map(lana => {
      return <Draggable key={lana.id} allowCopy={true} type="row" lana={lana}/>
  })
  return (
    <div className="content">
      <Grid>
        <div id="canvasDraggableArea" className="row draggableContent">
          {lanas}
        </div>
      </Grid>
    </div>
  );
}

export default StoreWatchMixin(Canvas, lanas);
