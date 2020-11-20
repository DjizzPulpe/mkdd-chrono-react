import React from 'react';
import raceJSON from '../../race.json'
import './RaceSelector.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class RaceSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
        <>
        <Row className="race-selector">
            {this.props.races.map((r, i) => 
                <Col key={i} className="p-0">
                    <Button key={i} value={i}
                        className="button-race-selector"
                        style={{
                            backgroundColor:raceJSON[i].color,
                            opacity: this.props.currentRaceId === i ? 1 : 0.6
                        }}
                        onClick={e => {
                            this.props.updateGrandChelem(Number(e.target.value), {color:raceJSON[e.target.value].color})
                        }}>
                        {raceJSON[i].tag.fr}
                    </Button>
                </Col>
            )}
        </Row>
        </>
      );
    }
  }
  export default RaceSelector;