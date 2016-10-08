import React from 'react';
import { Grid } from 'react-bootstrap';
import AppStore from '../../stores/app-store';
import Draggable from '../Draggable/Draggable';
import './canvas.css';

function getLanas() {
    return { lanas: AppStore.getLanas() }
}

class Canvas extends React.Component {
    constructor() {
        super();
        this.state = getLanas()
    }

  render() {

    let lanas = this.state.lanas.map(lana => {
        console.log(`${lana.size}`)
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
}

export default Canvas;
