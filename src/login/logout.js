// import  React from "react";
import { GoogleLogout } from 'react-google-login';

const clientId = '20124901378-pt60prpd3bkipmc9rvnf75tt5sdioe67.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        console.log('Logout made successfully');
    };





    return (
        <div>
            <GoogleLogout
            clientId = {clientId}
            buttonText = "Logout"
            onlogoutSuccess ={onSuccess}
            />
        </div>
    );
}

export default Logout;