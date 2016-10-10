import React from 'react';
import Navbar from './Navbar/Navbar';
import Canvas from './Canvas/Canvas';
import SideBar from './SideBar/Sidebar';
import AppStore from '../stores/app-store';
import { Grid, Row } from 'react-bootstrap';
import Drake from '../constants/dragula-option-constants';

const lanas = () => {
    return { lanas: AppStore.getLanas() }
}
class App extends React.Component {

    constructor() {
        super();
        this.state = lanas();
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState(lanas);
    }

    componentDidMount() {

        Drake.containers = [
            document.getElementById('sidebarDraggableArea'),
            document.getElementById('canvasDraggableArea')
        ];

        this.drake = Drake
    }

    render() {

        return (
            <div>
                <Navbar title="Talana"/>
                <Grid>
                    <Row>
                        <SideBar dragula={this.drake}/>
                        <Canvas state={this.state} dragula={this.drake}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
