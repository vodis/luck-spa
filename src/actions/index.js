import * as types from '../constants/ActionTypes';

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter});

export const addTodo = (text) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            text,
            completed: false,
            authorId: authorId,
            displayName: profile.displayName,
            createdAt: new Date()
        })
            .then(() => {
                dispatch({ type: types.ADD_TODO, text });
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_TODO_ERROR', err })
            })
    }
};

export const deleteTodo = id => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('todos').doc(id).delete()
        .then(() => {
            dispatch({ type: types.DELETE_TODO, id });
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err })
        })
};

export const editTodo = (id, text) => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('todos').doc(id).update({
        text: text
    })
        .then(() => {
            dispatch({ type: types.EDIT_TODO, id, text });
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err })
        })
};

export const completeTodo = (id, completed) => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('todos').doc(id).update({
        completed: !completed,
    })
        .then(() => {
            dispatch({ type: types.COMPLETE_TODO, id });
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err })
        })
};

export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const clearCompleted = (todos) => {
    console.log("this", todos);
    return { type: types.CLEAR_COMPLETED }
};





