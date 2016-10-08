import React from 'react';
import { Col } from 'react-bootstrap';
import Draggable from '../Draggable/Draggable';
import './sidebar.css';

class SideBar extends React.Component {

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
            <Col xs={6} sm={2} smPull={1} id="sidebarDraggableArea" className="content draggableContent">
                <Draggable allowCopy={true} lana={sideBarLana('row')} type="row"/>
                <div className="divider"/>
                <Draggable allowCopy={true} lana={sideBarLana('component')} type="component"/>
            </Col>
        );
    }
}

export default SideBar;
