import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../actions/authActions";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/about'>About</NavLink></li>
            <li><a href="/login" onClick={props.signOut}>Log Out</a></li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);