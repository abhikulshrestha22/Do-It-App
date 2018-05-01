import React from 'react';
import {Row,Col,Button,FormControl,FormGroup} from 'react-bootstrap';
const PomodoroComponent = ({goals,generateTick,tick})=>{
//    const PomodoroComponent = (e)=>{
        //console.log("here comes the e")
        //console.log(e);
    let pomodoroGoal;

    const handleChange=(event)=>{
        pomodoroGoal = event.target.value;
    }

    const startPomodoro = ()=>{
        //console.log(pomodoroGoal + "started");
        //console.log(tick);
        generateTick:generateTick(20);
    }

    // return (
    //     <FormGroup componentClass="select">
    //         <FormControl>
    //         <option key={-1}></option>
    //         {state.goals.map((goal,index)=>(
    //                         <option key={index}>{goal.text}</option>
    //                     ))}
    //     </FormControl>
    //     </FormGroup>
        

    // )

    
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


                <h1>{tick}</h1>
            </div>
            
            </Col>
        </Row>
        
    )
}

export default PomodoroComponent;