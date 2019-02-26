import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from "../../actions/authActions";

class SignUp extends Component {
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
        this.props.signUp(this.state);
    };

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />;

        return (
            <div className="container">
                <div className="row center">
                    <div className="col s12 m10 l8 xl8 offset-m1 offset-l2 offset-xl2">
                        <div className="card card-auth">
                            <h6 className="card-title">Sign Un</h6>
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
                                    <button className="btn btn-login indigo lighten-1 z-depth-0">Sign Un</button>
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

const mapStateToPtops = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
};

export default connect(mapStateToPtops, mapDispatchToProps)(SignUp);