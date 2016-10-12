import React from 'react';
import Navbar from './Navbar/Navbar';
import Canvas from './Canvas/Canvas';
import SideBar from './SideBar/Sidebar';
import MyModal from './Modal/Modal';
import AppStore from '../stores/app-store';
import AppActions from '../actions/actions';
import { Grid, Row } from 'react-bootstrap';
import Drake from '../constants/dragula-option-constants';

const state = () => {
    return AppStore.store
}
class App extends React.Component {

    constructor() {
        super();
        this.state = state();
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(state);
    }

    closeModal() {
        AppActions.hideModal();
    }

    openModal() {
        AppActions.showModal();
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
                        <MyModal
                            showModal={this.state.isShowingModal}
                            closeModal={this.closeModal.bind(this)}/>
                        <SideBar
                            dragula={this.drake}
                            openModal={this.openModal.bind(this)}/>
                        <Canvas
                            lanas={this.state.lanas}
                            openModal={this.openModal.bind(this)}
                            dragula={this.drake}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
