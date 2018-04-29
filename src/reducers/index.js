import goals from './goals';
import pomodoroGoal from './pomodoroGoal';
import {combineReducers} from 'redux';

const DoItApp= combineReducers({
    goals,
    pomodoroGoal
})

export default DoItApp;