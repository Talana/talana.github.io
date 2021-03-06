import React from 'react';
import { Col } from 'react-bootstrap';
import Draggable from '../Draggable/Draggable';
import './sidebar.css';
import Lana from '../../models/Lana';

class SideBar extends React.Component {
    constructor() {
        super();
        this.Lana = Lana;
        this.rowObj = Lana('row');
        this.componentObj = Lana('component');
    }
    render() {
        return (
            <Col xs={6} sm={2} smPull={1} id="sidebarDraggableArea" className="content draggableContent">
                <Draggable allowCopy={true} lana={this.rowObj} type="row" className="sidebar-draggable"/>
                <Draggable allowCopy={true} lana={this.componentObj} type="component" className="sidebar-draggable"/>
            </Col>
        );
    }
}

export default SideBar;
