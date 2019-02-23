import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
});

export default rootReducer;