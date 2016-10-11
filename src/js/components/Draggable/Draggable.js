import * as React from "react";
import { Col } from 'react-bootstrap';
import './draggable.css';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppStore from '../../stores/app-store';

const lanas = () => {
    return AppStore.store
}

const Draggable = (props) => {

    const classNames = props.className + ((props.allowCopy) ? ' allow_copy' : '');
    return (
        <Col xs={12}
        data-type={props.type}
        data-id={props.lana.id}
        onClick={props.openModal}
        className={classNames + ' draggable'}>
            <p className="text-center">{props.lana.id}</p>
        </Col>
        );
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

export default StoreWatchMixin(Draggable, lanas);
