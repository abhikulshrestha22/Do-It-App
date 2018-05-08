import goals from './goals';
import pomodoroGoal from './pomodoroGoal';
import tick from './tick';
import {combineReducers} from 'redux';

const DoItApp= combineReducers({
    goals,
    pomodoroGoal,
    tick
})

export default DoItApp;