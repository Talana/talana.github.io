import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

const store = () => {
    return AppStore.store
}

const MyModal = (props) => {

    return (
        <Modal show={props.showModal}>
        <Modal.Header closeButton onClick={props.closeModal}>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Text in a modal</h4>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <hr />

        <h4>Overflowing text to show scroll behavior</h4>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        gestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default StoreWatchMixin(MyModal, store);
