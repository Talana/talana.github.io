import React from 'react';
import '../sidebar.css';

export default class SideBarElement extends React.Component {

  render() {
    return (
      <div className="draggable sidebarLink">
          Mock menu item {this.props.id}
      </div>
    );
  }
}
