import React from 'react';
import './Race.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Race extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Row className="race-row" style={{opacity:this.props.opacity}}>
                <Col style={{color:this.props.color}}>{this.props.name}</Col>
                <Col>{this.props.player}</Col>
                <Col>{this.props.time}</Col>
                <Col style={{color:this.props.diffColor}}>{this.props.diff}</Col>
                <Col>{this.props.point}</Col>
                <Col>{this.props.item}</Col>
            </Row>
        )
    }
}

export default Race;