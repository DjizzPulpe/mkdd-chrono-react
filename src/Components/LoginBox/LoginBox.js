import React from 'react';
import './LoginBox.css'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};    
    }

    render() {
      return (
        <>
        <Row className="justify-content-md-center">
            <Col xs={6} className="login-box">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
        </>
      );
    }
  }
  export default LoginBox;