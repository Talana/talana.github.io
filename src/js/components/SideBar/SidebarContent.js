import React from 'react';
import Navbar from '../Navbar/Navbar';
import Draggable from '../Draggable/Draggable';
import './sidebar.css';

class SidebarContent extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div id="sidebarDraggableArea" className="content draggableContent">
          <Draggable allowCopy={true} type="row"/>
          <div className="divider"/>
          <Draggable allowCopy={true} type="component"/>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
