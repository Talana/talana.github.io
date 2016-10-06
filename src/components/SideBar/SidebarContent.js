import React from 'react';
import Navbar from '../Navbar/Navbar';
import DraggableElement from '../Draggable/DraggableElement';
import SideBarElement from './SideBarElement/SideBarElement';
import './sidebar.css';

class SidebarContent extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div id="sidebarDraggableArea" className="content draggableContent">
          <DraggableElement allowCopy={true} type="row"/>
          <div className="divider"/>
          <DraggableElement allowCopy={true} type="component"/>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
