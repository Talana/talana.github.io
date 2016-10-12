import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';
import AppStore from '../../stores/app-store';

const state = () => {
    return AppStore.store
}

export default class Draggable extends React.Component {

    constructor(props) {
        super(props);
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

    didClick() {
        console.log('asdfas')
    }

    handleClick() {
        console.log('clicking!!!');
    }
    render() {
        const classNames = this.props.className + ((this.props.allowCopy) ? ' allow_copy' : '');
        return (
            <div ref={`draggable-${this.props.lana.id}`} className={'col-xs-12 ' + classNames + ' draggable'}
                data-type={this.props.type}
                data-id={this.props.lana.id}
                onClick={this.handleClick}>
                    <p className="text-center">{this.props.lana.id}</p>
            </div>

            );
    }
}

Draggable.propTypes = {
    allowCopy: React.PropTypes.bool,
    lana: React.PropTypes.object,
    type: React.PropTypes.oneOf(['component', 'row']).isRequired
};

Draggable.defaultProps = {
    allowCopy: false,
    type: 'component'
};

