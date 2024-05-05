import React from 'react'
import { SignInButton } from '../components/SignInButton'
import { GoogleAuthProvider, signInWithPopup, getRedirectResult } from 'firebase/auth'
import './Login.css'
import { useDispatch } from 'react-redux'
import { auth } from '../config/firebase'
import { login } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom';
function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // add user info to Redux store
            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,

            }));

            // Redirect to home page
            navigate('/')


        } catch (error) {
            alert('error: ', error, ' signing in')

        }


    }
    return (

        <div className='login'>

            <div className='login__background'>




            </div>

            <div className='login__body'>
                <p>Welcome</p>
                <SignInButton className='login__button' onClick={handleGoogleLogin} />
            </div>


        </div>
    )
}

export default Login