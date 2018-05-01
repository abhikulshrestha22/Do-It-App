import React from 'react';
import {connect} from 'react-redux';
import {tickAction} from '../actions';
import PomodoroComponent from './PomodoroComponent.js';

const mapStateToProps = (state)=>{
    console.log("state is coming");
    console.log(state);
    return {...state}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        generateTick:(interval)=>{
            //console.log("inside tick" + dispatch);
            //while(interval>0){
                //console.log("inside while" + dispatch);
                let timer = setInterval(()=>{
                    dispatch(tickAction())}
                    ,1000);
                //interval--;
                //console.log(interval);
            }
        }
    }


const  PomodoroContainer = connect(mapStateToProps,mapDispatchToProps)(PomodoroComponent);

export default PomodoroContainer;