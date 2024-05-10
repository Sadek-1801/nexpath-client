import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import {  createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const githubProvider = new GithubAuthProvider();
const googleProver = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    // create user
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })  
    }

    // sign In
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const logOut = () => {
        setUser(null)
        return signOut(auth);
    }
    // google log in
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProver)
    }

    // github log in
    const githubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleLogin,
        githubLogin, 
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}   
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;