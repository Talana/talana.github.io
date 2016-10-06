import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideBarElement from './SideBarElement/SideBarElement';
import './SideBar.css';

const SidebarContent = (props) => {

  const links = [];

  for (let ind = 0; ind < 6; ind++) {
    links.push(<SideBarElement key={ind}/>);
  }

  return (
    <div>
      <Navbar/>
      <div className="content">
        <a href="index.html" className="sidebarLink">Home</a>
        <a href="responsive_example.html" className="sidebarLink">Responsive Example</a>
        <div className="divider"/>
        {links}
      </div>
    </div>
  );
};

export default SidebarContent;
