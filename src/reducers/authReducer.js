const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            console.log('login success', action.payload);
            return {
                ...state,
                authError: null
            };

        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            };

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            };

        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            };

        case 'GOOGLE_SIGNIN_SUCCESS':
            console.log('google signin success');
            return {
                ...state,
                authError: null
            };

        case 'GOOGLE_SIGNIN_ERROR':
            console.log('google signin error');
            return {
                ...state,
                authError: action.err.message
            };

        default:
            return state;
    }
};

export default authReducer;