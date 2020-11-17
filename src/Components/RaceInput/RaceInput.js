import React from 'react';
import './RaceInput.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import raceJSON from '../../race.json'

class RaceInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    updateParent(prop) {
        this.setState(prop, () => {
            this.props.updateGrandChelem({
                id:this.props.currentRaceId, 
                data:{key:Object.keys(prop)[0], value:prop[Object.keys(prop)[0]]}
            })
            
        })  
    }
  
    render() {
        return (
        <>
        <Row className="race-input" style={{backgroundColor:raceJSON[this.props.currentRaceId].color}}>

            <Col xs={3}>
                <img
                    className="race-logo"
                    src={"/race/" + raceJSON[this.props.currentRaceId].tag.fr + ".png"}
                    alt={raceJSON[this.props.currentRaceId].name.fr}>
                </img>
            </Col>

            <Col xs={12} lg={2}>
                <Form.Group controlId="">
                    <Form.Control as="select"onChange={e => this.updateParent({player: e.target.value})}>
                        <option>DJP</option>
                        <option>PAP</option>
                        <option>YRI</option>
                        <option>DLF</option>
                        <option>MAX</option>
                    </Form.Control>
                </Form.Group>
            </Col>

            <Col xs={12} lg={5} className="time-inpu"> 
                <Form.Group controlId="" className="time-input">     
                    <Form.Control
                        type="number" min={0} max={9}
                        value={this.props.races[this.props.currentRaceId].min}
                        onChange={e => this.updateParent({min: Number(e.target.value)})}/>
                    <span className="unit">m</span>
                    
                    <Form.Control
                        type="number" min={0} max={59}
                        value={this.props.races[this.props.currentRaceId].sec}
                        onChange={e => this.updateParent({sec: Number(e.target.value)})}/>
                    <span className="unit">s</span>
                    
                    <Form.Control
                        type="number" min={0} max={999}
                        value={this.props.races[this.props.currentRaceId].msec} 
                        onChange={e => this.updateParent({msec: Number(e.target.value)})}/>
                    <span className="unit">ms</span>
                </Form.Group>
            </Col>

            <Col xs={12} lg={2}>
                <Form.Group controlId=""    >
                    <Form.Control as="select"
                    onChange={e => {
                        this.updateParent({point: Number(e.target.value)})
                    }}
                    value={this.props.races[this.props.currentRaceId].point}>
                        <option value={10}>1st - 10pts</option>
                        <option value={8}>2nd - 8pts</option>
                        <option value={6}>3rd - 6pts</option>
                        <option value={4}>4th - 4pts</option>
                        <option value={3}>5th - 3pts</option>
                        <option value={2}>6th - 2pts</option>
                        <option value={1}>7th - 1pt</option>
                        <option value={0}>8th - 0pt</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        </>
        );
    }
}

export default RaceInput;