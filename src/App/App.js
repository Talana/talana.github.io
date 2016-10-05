import React from 'react';
import Sidebar from 'react-sidebar';
import Navbar from '../components/Navbar/Navbar';
import Canvas from '../components/Canvas/Canvas';
import SidebarContent from '../components/SideBar/SidebarContent';

class App extends React.Component {

  render() {
    const sidebarProps = {
      sidebar: (<SidebarContent />),
      docked: true,
      shadow: false
    };

    return (
      <Sidebar {...sidebarProps}>
        <Navbar title="Talana"/>
        <Canvas/>
      </Sidebar>
    );
  }
}

export default App;