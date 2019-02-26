import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../actions/authActions";


const SignedInLinks = (props) => {
    return (
        <div className="in-links">
            <ul className="right">
                <li><a href='/'>Home</a></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><a onClick={props.signOut}>Log Out</a></li>
            </ul>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);