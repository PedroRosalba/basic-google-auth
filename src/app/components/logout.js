import {GoogleLogout} from "react-google-login";

const clientId = "703790624547-2ahroqur2t8273cijcpeft1868f12e2o.apps.googleusercontent.com";

function Logout(){

    const onSuccess = (res) => {
        console.log("Logout Successful!");
    }

    return (    
        <div id="signOutButton">
            <GoogleLogout
                clientId = {clientId}
                buttonText="Login"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;