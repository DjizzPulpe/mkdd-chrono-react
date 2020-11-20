import React from 'react';
import './RaceInput.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import moment from 'moment'
import raceJSON from '../../race.json'

class RaceInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    //only solution found to send time instead of min, sec, msec to parent
    getTime(){
        const min = Number(document.getElementsByName("min").item(0).value)
        const sec = Number(document.getElementsByName("sec").item(0).value)
        const msec = Number(document.getElementsByName("msec").item(0).value)
        this.props.updateGrandChelem(this.props.currentRaceId, {time:(min * 60 + sec) * 1000 + msec})
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
                    <Form.Control as="select" onChange={e => this.props.updateGrandChelem(this.props.currentRaceId, {player:e.target.value})}>
                        <option value="kookko">DJP</option>
                        <option value="kookko">PAP</option>
                        <option value="kookko">YRI</option>
                        <option value="kookko">DLF</option>
                        <option value="kookko">MAX</option>
                    </Form.Control>
                </Form.Group>
            </Col>

            <Col xs={12} lg={5} className="time-input"> 
                <Form.Group controlId="" className="time-input"
                onChange={() => this.getTime()}>     
                    <Form.Control
                        name="min"
                        type="number" min={0} max={9}
                        value={moment.duration(this.props.races[this.props.currentRaceId].time).minutes()}
                        onChange={()=>console.log()}
                    />
                    <span className="unit">m</span>
                    
                    <Form.Control
                        name="sec"
                        type="number" min={0} max={59}
                        value={moment.duration(this.props.races[this.props.currentRaceId].time).seconds()}
                        onChange={()=>console.log()}
                    />
                    <span className="unit">s</span>
                    
                    <Form.Control
                        name="msec"
                        type="number" min={0} max={999}
                        value={moment.duration(this.props.races[this.props.currentRaceId].time).milliseconds()}
                        onChange={()=>console.log()} 
                    />
                    <span className="unit">ms</span>
                </Form.Group>
            </Col>

            <Col xs={12} lg={2}>
                <Form.Group controlId=""    >
                    <Form.Control as="select"
                    onChange={e => this.props.updateGrandChelem(this.props.currentRaceId, {point:Number(e.target.value)})}
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