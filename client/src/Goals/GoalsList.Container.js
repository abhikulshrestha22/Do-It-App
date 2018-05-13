//import React from 'react';
import {connect} from 'react-redux';
import {fetchGoals} from '../actions';

import GoalsListComponent from './GoalsList.Component.js';

const mapStateToProps = (state)=>{
    
    console.log("in goalslist")
    console.log(state);
    //return {goals:[...state]}
    return {goals:state.goals}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchGoalsOnMount: ()=>{
        console.log('inside fetch goals');
        dispatch(fetchGoals())}
    }
}

const goalsListContainer = connect(mapStateToProps,mapDispatchToProps)(GoalsListComponent);

export default goalsListContainer;

