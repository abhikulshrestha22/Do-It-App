import React from 'react';
import {connect} from 'react-redux';

import GoalsListComponent from '../components/GoalsList.Component.js';

const mapStateToProps = (state)=>{
    console.log("in goalslist")
    console.log(state);
    //return {goals:[...state]}
    return {goals:state.goals}
}

const goalsListContainer = connect(mapStateToProps)(GoalsListComponent);

export default goalsListContainer;

