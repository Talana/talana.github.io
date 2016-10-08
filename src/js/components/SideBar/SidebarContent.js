import React from 'react';
import Navbar from '../Navbar/Navbar';
import Draggable from '../Draggable/Draggable';
import './sidebar.css';

class SidebarContent extends React.Component {

  render() {
    const sideBarLana = (type) => {
      return {
       id: `Comp ${(type === 'row') ? 1 : 2}`,
       title: type,
       size: 12,
       'type': type
   };
    };
    return (
      <div>
        <Navbar/>
        <div id="sidebarDraggableArea" className="content draggableContent">
          <Draggable allowCopy={true} lana={sideBarLana('row')} type="row"/>
          <div className="divider"/>
          <Draggable allowCopy={true} lana={sideBarLana('component')} type="component"/>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
