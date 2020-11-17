import React from 'react';
import './ModalBox.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class ModalBox extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            show:true
        }
    }

    render() {
        return(
        <>
        <Modal show={this.state.show}>

            <Modal.Header closeButton onClick={() => this.setState({show:false})}>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
    )}
}

export default ModalBox;