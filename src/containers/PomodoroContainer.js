import React from 'react';
import {connect} from 'react-redux';

import PomodoroComponent from '../components/PomodoroComponent.js';

const mapStateToProps = (state)=>{
    return {...state}
}

const  PomodoroContainer = connect(mapStateToProps)(PomodoroComponent);

export default PomodoroContainer;