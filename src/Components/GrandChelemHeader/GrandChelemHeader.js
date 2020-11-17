import React from 'react';
import './GrandChelemHeader.css'

import moment from 'moment'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class GrandChelemHeader extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
        <>
        <Row className="grand-chelem-header">
            <Col>Grand Chelem #999</Col>  
            <Col>{
                moment.duration(this.props.time).minutes() + "m " +
                moment.duration(this.props.time).seconds() + "s " +
                moment.duration(this.props.time).milliseconds() + "ms "
            }</Col>
            <Col>GrandChelem Diff</Col>
            <Col xs={2}>{this.props.point} Pts</Col>
            <Col xs={2}>{this.props.date}</Col>
        </Row>

        <Row className="grand-chelem-header float-right" >
            <Col lg="auto">
                <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch-duo"
                    label="Duo"
                    onChange={e => {
                        this.setState({duo: e.target.ckecked})
                    }}/>
                <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch-mirror"
                    label="Mirror"
                    onChange={e => {
                        this.setState({mirror: e.target.ckecked})
                    }}/>
            </Col>


            <Col sm="auto">
                <Button 
                    disabled={this.props.isFinished ? false : true}
                    onClick={() => this.props.resetGrandChelem()}
                > Quit 
                </Button>
            </Col>
            <Col sm="auto">
                <Button disabled={this.props.isFinished ? false : true}> Save </Button>
            </Col>
        </Row>
        </>
    )}
}

export default GrandChelemHeader;