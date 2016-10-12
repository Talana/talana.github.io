import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import Draggable from '../Draggable/Draggable';
import './sidebar.css';
import Lana from '../../models/Lana';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.rowObj = Lana('row');
        this.componentObj = Lana('component');
    }

    componentDidUpdate(prevProps, prevState) {

        let hello = ReactDOM.findDOMNode(this.refs.row.refs['draggable-0']);
        debugger;
        console.log('refs: '+ this.refs);
    }

    render() {
        return (
            <Col xs={6} sm={2} smPull={1} id="sidebarDraggableArea" className="content draggableContent">
                <Draggable
                    ref="row"
                    allowCopy={true}
                    openModal={this.props.openModal}
                    lana={this.rowObj}
                    type="row"
                    className="sidebar-draggable"/>
                <Draggable
                    ref="component"
                    allowCopy={true}
                    openModal={this.props.openModal}
                    lana={this.componentObj}
                    type="component"
                    className="sidebar-draggable"/>
            </Col>
        );
    }
}

export default SideBar;
