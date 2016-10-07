import React from 'react';
import Sidebar from 'react-sidebar';
import Navbar from './Navbar/Navbar';
import Canvas from './Canvas/Canvas';
import SidebarContent from './SideBar/SidebarContent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.dragula = props.dragula;
    this.drake = {};
    this.state = {
      hello: 0,
      drake: {}
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('updated!!');
  }
  componentDidMount() {

    let options = {
      copy: function(el, source) {
        if (el.classList.contains("allow_copy")) {
          return true;
        }
      },
      moves: function(el, container, handle) {
        return el.classList.contains('draggableContent') || el.classList.contains('draggable');
      },
      accepts: function(el, target, source, sibling) {
        return target.classList.contains("draggableContent") && target !== document.getElementById('sidebarDraggableArea');
      },
      direction: 'vertical',
      removeOnSpill: true
    };
    var [sidebar, canvas] = [document.getElementById('sidebarDraggableArea'), document.getElementById('canvasDraggableArea')];
    this.drake = this.dragula([sidebar, canvas], options)
    .on('drop', (el, target, source, sibling) => {
      this.setState({hello: this.state.hello + 1})
      if(source === document.getElementById('sidebarDraggableArea')) {
        el.className = el.className.replace('allow_copy','');
        if(el.getAttribute('data-type') === 'component') {
          el.className = el.className.replace('col-xs-12','col-xs-2');
        } else {
          // el.className = el.className.replace('col-xs-12','col-xs-12');
          el.className += ' draggableContent';
          this.drake.containers.push(el);
        }
      }
    });

  }

  render() {
    const sidebarProps = {
      sidebar: (<SidebarContent dragula={this.drake}/>),
      docked: true,
      shadow: false
    };

    return (
      <Sidebar {...sidebarProps} ref="items">
        <Navbar title="Talana"/>
        <Canvas state={this.state} dragula={this.drake}/>
      </Sidebar>
    );
  }
}

export default App;
