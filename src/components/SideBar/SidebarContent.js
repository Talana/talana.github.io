import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideBarElement from './SideBarElement/SideBarElement';
import './sideBar.css';

class SidebarContent extends React.Component {

  render() {
    const links = [];

    for (let ind = 0; ind < 6; ind++) {
      links.push(<SideBarElement key={ind} id={ind}/>);
    }

    return (
      <div>
        <Navbar/>
        <div id="sidebarDraggableArea" className="content draggableContent">
          <a href="#" className="sidebarLink">Home</a>
          <a href="#" className="draggable sidebarLink">Responsive Example</a>
          <div className="divider"/>
          {links}
        </div>
      </div>
    );
  }
}

export default SidebarContent;
