import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container container-tab">
                <div className="brand-log">
                    <a href='/' className="brand-logo" >Luck SPA</a>
                </div>
                { links }
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Navbar);