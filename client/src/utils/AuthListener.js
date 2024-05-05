import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user/userSlice';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from "firebase/auth";

const AuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(user => {
            if (user) {
                // User is signed in
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid
                }));
            } else {
                // User is signed out
                dispatch(logout());
            }
        });

        // Cleanup subscription 
        return () => unsubscribe();
    }, [dispatch]);

    return null; // This component does not render anything
};

export default AuthListener;
