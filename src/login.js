import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./login.css";


const clientId = '20124901378-pt60prpd3bkipmc9rvnf75tt5sdioe67.apps.googleusercontent.com';

function Login(){

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profilObj);
    }


    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);

    };
    return (
        // <h1>
        //     Login Page
        // </h1>
        <div id='signInButton'>
        <GoogleLogin
            clientId = {clientId}
            buttonText = "Sign in with Google"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiepolicy = {'single_host_origin'}
            style = {{marginTop: '100px'}}
            isSignedIn = {true}
            
        />
        </div>
    )
}

export default Login;