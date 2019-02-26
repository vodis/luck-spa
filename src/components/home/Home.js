import React from 'react';
import TodoSummary from '../todos/TodoSummary';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const { auth } = props;
    if (!auth.uid) return <Redirect to='/login' />;

    return (
        <div>
            <TodoSummary/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Home);