import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const About = (props) => {
    const { auth } = props;
    if (!auth.uid) return <Redirect to='/login' />;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Luck SPA</span>
                    <p>Welcome to Luck SPA Todo List.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the vodis</div>
                    <div>20th February, 1am</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(About);