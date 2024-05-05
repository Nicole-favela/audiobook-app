import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from '../features/user/userSlice'
import { login, logout } from '../features/user/userSlice'
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase'


const PrivateRoute = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // Dispatch login action 
                dispatch(login({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName
                }));
            } else {
                //logout action
                dispatch(logout());
            }
        });

        //
        return () => unsubscribe();
    }, [dispatch]);

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;