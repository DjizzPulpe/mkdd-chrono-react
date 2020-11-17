import React from 'react';

import './GrandChelem.css'

import moment from 'moment'
import RaceList from '../RaceList/RaceList'

import RaceInput from '../RaceInput/RaceInput'
import GrandChelemHeader from '../GrandChelemHeader/GrandChelemHeader'
import RaceSelector from '../RaceSelector/RaceSelector'
// import ModalBox from '../ModalBox/ModalBox'

class GrandChelem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        duo: false,
        mirror: false,
        time:0,
        point:0,
        date:moment().format("DD/MM/YYYY HH:mm"),
        races: this.raceArray(),
        currentRaceId:0
      }
    }

    //here for localStorage.setItem('grandChelemStorage', this.state)
    componentDidUpdate(){console.log("state", this.state)}

    raceArray() { return new Array(16).fill(null).map((e, i)=> ({
        id:i,
        player:"",
        time:0,
        min:0,
        sec:0,
        msec:0,
        point:0  
    }))}

    updateGrandChelem(prop){
        const races = this.state.races.slice()
        if(this.state.currentRaceId === prop.id){
          races[prop.id][prop.data.key] = prop.data.value
          races[prop.id].time = (races[prop.id].min * 60 + races[prop.id].sec) * 1000 + races[prop.id].msec
        }
        
        this.setState({
          time:races.map(r => (r.min * 60 + r.sec) * 1000 + r.msec).reduce((a, b) => a + b, 0),
          point:races.map(r => r.point).reduce((a, b) => a + b, 0),
          currentRaceId:prop.id,
          races: races,
          isFinished: this.isFinished(races)
        });
    }

    isFinished(r){
        //return !r.map((r, i) => r.player !== "" && r.time !== 0 && r.point !== 0 ? true : false).includes(false)
        return true
    }

    resetGrandChelem(){
        this.setState({
            duo: false,
            mirror: false,
            time:0,
            point:0,
            date:moment().format("DD/MM/YYYY HH:mm"),
            races: this.raceArray(),
            currentRaceId:0
        })
    }

    render() {
      return (
        <>
        
        <GrandChelemHeader
            isFinished = {this.isFinished(this.state.races)}
            resetGrandChelem = {() => this.resetGrandChelem()}
            time={this.state.time}
            point={this.state.point}
            date={this.state.date}
        />

        <RaceInput
            races={this.state.races} 
            updateGrandChelem={r => this.updateGrandChelem(r)} 
            currentRaceId={this.state.currentRaceId}
        />
        <RaceSelector 
            currentRaceId = {this.state.currentRaceId}
            races={this.state.races} 
            updateParent={r => this.updateGrandChelem(r)}
        />

        <RaceList 
            playable={this.props.playable}
            races={this.state.races} 
            currentRaceId={this.state.currentRaceId}
        />

        </>
      );
    }
  }

  export default GrandChelem;