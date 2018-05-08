import React from 'react';
import {connect} from 'react-redux';
import {tickAction,setIntervalValueAction,stopTickAction} from '../actions';
import PomodoroComponent from './PomodoroComponent.js';

const mapStateToProps = (state)=>{
    console.log("state is coming");
    console.log(state);
    return {...state}
}
let timer;
const mapDispatchToProps = (dispatch)=>{
    return{
        actions:{
            //To decrease the time every second
            generateTick:(interval)=>{
                
                    timer = setInterval(()=>{
                        dispatch(tickAction(interval))}
                        ,1000);
                    
                },
            //To set the state first to the time, to start the timer in reverse
            setIntervalValue:(time)=>{
                dispatch(setIntervalValueAction(time));
            },
            stopTick:()=>{
                clearInterval(timer);
                dispatch(stopTickAction());
            }
        }
        
        }
    }


const  PomodoroContainer = connect(mapStateToProps,mapDispatchToProps)(PomodoroComponent);

export default PomodoroContainer;