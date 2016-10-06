import React from 'react';
import Sidebar from 'react-sidebar';
import Dragula from 'react-dragula';
import Navbar from '../components/Navbar/Navbar';
import Canvas from '../components/Canvas/Canvas';
import SidebarContent from '../components/SideBar/SidebarContent';

class App extends React.Component {

  componentDidMount() {

    let options = {
      copy: function(el, source) {
        if (source.classList.contains("allow_copy")) {
          return true;
        }
      },
      moves: function(el, container, handle) {
        return el.classList.contains('draggableContent') || el.classList.contains('draggable');
      },
      accepts: function(el, target, source, sibling) {
        return target.classList.contains("draggableContent") && target !== document.getElementById('sidebarDraggableArea');
      },
      direction: 'vertical'
    };

    Dragula([document.getElementById('sidebarDraggableArea'), document.getElementById('canvasDraggableArea')], options);
  }

  render() {
    const dragula = Dragula();
    const sidebarProps = {
      sidebar: (<SidebarContent dragula={dragula}/>),
      docked: true,
      shadow: false
    };

    return (
      <Sidebar {...sidebarProps}>
        <Navbar title="Talana"/>
        <Canvas dragula={dragula}/>
      </Sidebar>
    );
  }
}

export default App;
