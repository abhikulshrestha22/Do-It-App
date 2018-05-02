import React from 'react';
import {Row,Col,Button,FormControl,FormGroup} from 'react-bootstrap';
const PomodoroComponent = ({goals,actions,tick})=>{
//    const PomodoroComponent = (e)=>{
        //console.log("here comes the e")
        //console.log(e);
    let pomodoroGoal;

    const handleChange=(event)=>{
        pomodoroGoal = event.target.value;
    }

    const startPomodoro = ()=>{
        setIntervalValue:actions.setIntervalValue(40);
        generateTick:actions.generateTick(20);
    }

    //to convert seconds into hh:mm:ss format
    const convertSecondsToHourMin=(seconds)=>{
        if(seconds===0){
            actions.stopTick();
        }
        const hour = formattedNumber( Math.floor(seconds/3600));
        const min = formattedNumber(Math.floor(seconds/60) - hour*60);
        const sec = formattedNumber(seconds-min*60);
        return hour + ':' + min + ':' + sec
    }

    const formattedNumber = (number)=>{
        return ('0' + number).slice(-2);
    }

    
    return (
        <Row>
            <Col xs={12} md={10} mdOffset={1}>
            <div className="divForPadding">
                <select className="selectGoal" value={pomodoroGoal} onChange={handleChange}>
                <option key={-1}></option>
                {goals.map((goal,index)=>(
                    <option key={index}>{goal.text}</option>
                ))}

                </select>
        
                <Button bsStyle="success" onClick={startPomodoro}>Start pomodoro</Button>


                <h1>{convertSecondsToHourMin(tick)}</h1>
            </div>
            
            </Col>
        </Row>
        
    )
}

export default PomodoroComponent;