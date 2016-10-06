import React from 'react';
import '../SideBar.css';

export default class SideBarElement extends React.Component {

  render() {
    return (
      <div>
          <a href="#" className="sidebarLink">Mock menu item {this.props.id}</a>
      </div>
    );
  }
}
