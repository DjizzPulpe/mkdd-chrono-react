import React from 'react';
import './GrandChelem.css'

import moment from 'moment'

import GrandChelemHeader from '../GrandChelemHeader/GrandChelemHeader'
import RaceInput from '../RaceInput/RaceInput'
import RaceSelector from '../RaceSelector/RaceSelector'
import RaceList from '../RaceList/RaceList'

//import ModalBox from '../ModalBox/ModalBox'


class GrandChelem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        solo: true,
        mirror: false,
        time:0,
        diff:0,
        point:160,
        date:moment().format("DD/MM/YYYY HH:mm"),
        races: this.raceArray(),
        currentRaceId:0,
        best:best,
        boa:boa,
        count:{solo:0, duo:1, soloMirror:2, duoMirror:3}
      }
    }

    componentDidUpdate(){
        localStorage.setItem('grandChelemStorage', JSON.stringify(this.state))
        //console.log("componentDidUpdate", JSON.parse(localStorage.getItem('grandChelemStorage')))
    }

    componentDidMount(){
        if(localStorage.getItem('grandChelemStorage') != null)   this.setState(JSON.parse(localStorage.getItem('grandChelemStorage')))
        //console.log("componentDidMount", JSON.parse(localStorage.getItem('grandChelemStorage')))
    }

    timeToText(ms, diff=false){
        let text = ""
        text = moment.duration(ms).milliseconds() + "ms"
        text = ms > 999 ? moment.duration(ms).seconds() + "s " +  text :  text
        text = ms > 59999 ? moment.duration(ms).minutes() + "min " +  text : text
        text = diff && ms > 0 ? "+" + text : text
        return text
    }

    raceArray() { return new Array(16).fill(null).map((e, i)=> ({
        played:false,
        id:i,
        player:"Player",
        time:0,
        point:10,
        diff:{value:0, color:""},
        text:""
    }))}

    updateGrandChelem(id, prop){
        const races = this.state.races.slice()

        if(this.state.currentRaceId === id && id!=null){
            Object.entries(prop).map((v, i) => {
                races[id][v[0]] = v[1] //v[0]=key, v[0]=value
                races[id].text = this.timeToText(races[id].time)
                races[id].played = races[id].time > 0 ? true : false
                races[id].diff = {
                    value : races[id].time - this.state.best[id].time,
                    color : races[id].time < this.state.boa[id].time ? "yellow" : 
                            races[id].time < this.state.best[id].time ? "green" : "red"
                }
                return true //map() expect a return
            }) 
        }
        
        this.setState({
          time:races.map(r => r.time).reduce((a, b) => a + b, 0),
          diff:races.map(r => r.diff.value).reduce((a, b) => a + b, 0),
          point:races.map(r => r.point).reduce((a, b) => a + b, 0),
          currentRaceId:id,
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
            solo: true,
            mirror: false,
            time:0,
            diff:0,
            point:0,
            date:moment().format("DD/MM/YYYY HH:mm"),
            races: this.raceArray(),
            currentRaceId:0
        })
    }

    render() {
        let input
        if(this.props.isPlayable){
            input = <>
            <RaceInput
                races={this.state.races} 
                updateGrandChelem={(id, prop) => this.updateGrandChelem(id, prop)} 
                currentRaceId={this.state.currentRaceId}
            />
            <RaceSelector 
                currentRaceId = {this.state.currentRaceId}
                races={this.state.races} 
                updateGrandChelem={(id, prop) => this.updateGrandChelem(id, prop)}
            />
            </>
        }

        return (
        <>  
        <GrandChelemHeader
            isPlayable = {this.props.isPlayable}
            isFinished = {this.isFinished(this.state.races)}
            updateGrandChelem={(prop) => this.setState(prop)}
            resetGrandChelem = {() => this.resetGrandChelem()}

            solo={this.state.solo}
            mirror={this.state.mirror}
            time={this.timeToText(this.state.time)}
            diff={this.timeToText(this.state.diff, true)}
            diffColor={this.state.diff <= 0 ? "green" : "red" }
            point={this.state.point}
            date={this.state.date}
            count={this.state.count}
        />

        {input}

        <RaceList 
            isPlayable={this.props.isPlayable}
            timeToText={(t, d) => this.timeToText(t, d)}
            currentRaceId={this.state.currentRaceId}
            races={this.state.races}
        />

        </>
      );
    }
  }

  export default GrandChelem;

const best = [
    {id:0,player:"okokok",time:100,point:10},
    {id:1,player:"okokok",time:100,point:10},
    {id:2,player:"okokok",time:100,point:10},
    {id:3,player:"okokok",time:100,point:10},
    {id:4,player:"okokok",time:100,point:10},
    {id:5,player:"okokok",time:100,point:10},
    {id:6,player:"okokok",time:100,point:10},
    {id:7,player:"okokok",time:100,point:10},
    {id:8,player:"okokok",time:100,point:10},
    {id:9,player:"okokok",time:100,point:10},
    {id:10,player:"okokok",time:100,point:10},
    {id:11,player:"okokok",time:100,point:10},
    {id:12,player:"okokok",time:100,point:10},
    {id:13,player:"okokok",time:100,point:10},
    {id:14,player:"okokok",time:100,point:10},
    {id:15,player:"okokok",time:100,point:10}
]

const boa = [
    {id:0,player:"okokok",time:50,point:10},
    {id:1,player:"okokok",time:50,point:10},
    {id:2,player:"okokok",time:50,point:10},
    {id:3,player:"okokok",time:50,point:10},
    {id:4,player:"okokok",time:50,point:10},
    {id:5,player:"okokok",time:50,point:10},
    {id:6,player:"okokok",time:50,point:10},
    {id:7,player:"okokok",time:50,point:10},
    {id:8,player:"okokok",time:50,point:10},
    {id:9,player:"okokok",time:50,point:10},
    {id:10,player:"okokok",time:50,point:10},
    {id:11,player:"okokok",time:50,point:10},
    {id:12,player:"okokok",time:50,point:10},
    {id:13,player:"okokok",time:50,point:10},
    {id:14,player:"okokok",time:50,point:10},
    {id:15,player:"okokok",time:50,point:10}
]