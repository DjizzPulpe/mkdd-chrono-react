import React from 'react';
import Race from '../Race/Race'
import raceJSON from '../../race.json'

import './RaceList.css'

import Row from 'react-bootstrap/Row';

class RaceList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};    
    }

    render() {
      return (
        <>
        <Row className="race-list">
            {this.props.races.map((r, i) =>  <Race
                key={i}
                color = {raceJSON[i].color}
                opacity = {!this.props.isPlayable ? 1 : i === this.props.currentRaceId || r.played ? 1 : 0.5}
                name={raceJSON[i].name.fr}
                player={r.played ? r.player : ""}
                time = {r.played ? this.props.timeToText(r.time) : ""}
                diff={r.played ? this.props.timeToText(r.diff.value, true) : ""}
                diffColor={r.diff.color}
                point={r.played ? r.point + " Pts" : ""}
                item={r.played ? "Race Items" : ""}
            />)}
        </Row>
        </>
      );
    }
  }
  export default RaceList;