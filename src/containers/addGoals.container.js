import React from 'react';
import {connect} from 'react-redux';
import addGoalAction from '../actions';

import AddGoalsComponent from '../components/addGoals.component';


const mapDispatchToProps = (dispatch)=>{
    return {
        onSubmit:(text)=>{
            dispatch(addGoalAction(text));
        }
    }
}

const AddGoalsContainer = connect(null,mapDispatchToProps)(AddGoalsComponent);

export default AddGoalsContainer