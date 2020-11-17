import React from 'react';
import Race from '../Race/Race'
import raceJSON from '../../race.json'

class RaceList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};    
    }

    render() {
      return (
        <>
        {this.props.races.map((r, i) =>  <Race
            key={i}
            color = {raceJSON[i].color}
            opacity = {!this.props.playable ? 1 : i === this.props.currentRaceId ? 1 : 0.6}
            name={raceJSON[i].name.fr}
            player={r.player}
            time={r.min + "m " + r.sec + "s " + r.msec + "ms"}
            diff="+999m 999s 999ms"
            point={r.point}
            item="Race Items"
        />)};
        </>
      );
    }
  }
  export default RaceList;