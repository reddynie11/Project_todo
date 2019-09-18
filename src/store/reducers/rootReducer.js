import { combineReducer } from 'redux'
import projectReducer from './projectReducer';
import authReducer from './authReducer';

const rootReducer = combineReducer({
    auth:authReducer,
    project : projectReducer
})

export default rootReducer;