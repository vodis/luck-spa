import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from "../../actions/authActions";
import { Redirect } from 'react-router-dom';
import { googleSignIn } from "../../actions/authActions";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    handleGoogleSubmit = (e) => {
        e.preventDefault();
        this.props.googleSignIn();
    };

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />;

        return (
            <div className="container">
                <div className="row center">
                    <div className="col s12 m10 l8 xl8 offset-m1 offset-l2 offset-xl2">
                        <div className="card card-auth">
                            <h6 className="card-title">Sign In</h6>
                            <button className="col s12 btn indigo lighten-1 z-depth-0" onClick={this.handleGoogleSubmit}>Continue with Google</button>

                            <p className="auth-divider">Sign in with you email</p>
                            <form onSubmit={this.handleSubmit} className="white">
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button className="btn btn-login indigo lighten-1 z-depth-0">Login</button>
                                    <div className="red-text center">
                                        { authError ? <p>{authError}</p> : null }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        googleSignIn: (newUser) => dispatch(googleSignIn(newUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);