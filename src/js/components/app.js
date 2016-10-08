import React from 'react';
import Navbar from './Navbar/Navbar';
import Canvas from './Canvas/Canvas';
import SideBar from './SideBar/Sidebar';
import AppStore from '../stores/app-store';
import AppActions from '../actions/actions';
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

        Drake.on('drop', this.dropLana);

        this.drake = Drake
    }

    dropLana(el, target, source, sibiling) {
        if(target !== document.getElementById('sidebarDraggableArea')) {
            let lana = JSON.parse(el.getAttribute('data-lana'));
            AppActions.addLana.bind(el, lana);

            el.className = el.className.replace('allow_copy','');
            if(el.getAttribute('data-type') === 'component') {
                el.className = el.className.replace('col-xs-12','col-xs-2');
            } else {
                el.className += ' draggableContent';
                Drake.containers.push(el);
            }
            el.className += ' dropped';
        } else {
            console.log('asdffasdf');
        }
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
