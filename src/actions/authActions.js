export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
};

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
           return firestore.collection('users').doc(res.user.uid).set({
               displayName: "No name"
           })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
};

export const googleSignIn = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                return {
                    token: result.credential.accessToken,
                    user: result.user
                }
            }).then((res) => {
                return firestore.collection('users').doc(res.user.uid).set({
                    displayName: res.user.displayName
                })
            }).then(() => {
                dispatch({ type: 'GOOGLE_SIGNIN_SUCCESS' })
            }).catch(err => {
                dispatch({ type: 'GOOGLE_SIGNIN_ERROR', err })
            })
    }
};