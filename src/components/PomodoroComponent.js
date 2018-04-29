import React from 'react';

const PomodoroComponent = (state)=>{

    let pomodoroGoal;

    const handleChange=(event)=>{
        pomodoroGoal = event.target.value;
    }

    const startPomodoro = ()=>{
        console.log(pomodoroGoal + "started");
        setTimeout(()=>{
            console.log("stopped")
        },4000);
    }

    
    return (
        <div>
            <select value={pomodoroGoal} onChange={handleChange}>
                <option key={-1}></option>
                {state.goals.map((goal,index)=>(
                    <option key={index}>{goal.text}</option>
                ))}

            </select>
            
            <button onClick={startPomodoro}>Start pomodoro</button>
        </div>
        
    )
}

export default PomodoroComponent;