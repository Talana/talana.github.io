import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import './dragula.css';

export class DragulaComp extends React.Component {
  render () {
    return <div className='dragula-section' ref={this.dragulaDecorator}>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
};

export default DragulaComp;