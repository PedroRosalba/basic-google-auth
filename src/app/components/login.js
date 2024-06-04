import {GoogleLogin} from "react-google-login";

const clientId = "703790624547-2ahroqur2t8273cijcpeft1868f12e2o.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res:", res);
    }

    return (    
        <div id="signinButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;