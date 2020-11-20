import React from 'react';
import './GrandChelemHeader.css'

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

        let input
        if(this.props.isPlayable){
            input = <>
            <Row className="grand-chelem-header float-right" >

            <Col lg="auto">
                <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch-solo"
                    label="Duo"
                    onChange={e => {
                        this.props.updateGrandChelem({solo: !e.target.checked})
                    }}/>
                <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch-mirror"
                    label="Mirror"
                    onChange={e => {
                        this.props.updateGrandChelem({mirror: e.target.checked})
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
        }


        return(
        <>
        <Row className="grand-chelem-header">
            <Col>Grand Chelem {
                this.props.solo && !this.props.mirror ? "Solo #" + this.props.count.solo :
                this.props.solo && this.props.mirror ? "SoloM #" + this.props.count.soloMirror :
                !this.props.solo && !this.props.mirror ? "Duo #" + this.props.count.duo : "DuoM #" + this.props.count.duoMirror
            }</Col>  
            <Col>{
                this.props.time
            }</Col>
            <Col style={{color:this.props.diffColor}}>{this.props.diff}</Col>
            <Col xs={2}>{this.props.point} Pts</Col>
            <Col xs={2}>{this.props.date}</Col>
        </Row>

        {input}

        </>
    )}
}

export default GrandChelemHeader;