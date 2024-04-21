import React from 'react'
import { SignInButton } from '../components/SignInButton'
import './Login.css'
function Login() {
    return (

        <div className='login'>

            <div className='login__background'>




            </div>

            <div className='login__body'>
                <p>Welcome</p>
                <SignInButton className='login__button' />
            </div>


        </div>
    )
}

export default Login