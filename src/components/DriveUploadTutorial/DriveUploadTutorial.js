import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
// import {google} from 'googleapis';

const DriveUploadTutorial = () => {
    const [data,setData] = useState();

    const responseGoogle = (response) => {
        console.log(response);
        setData({...response});
        // createFolder(response);
      }

    
    return (
        <div>
            <GoogleLogin
                clientId="255100707954-cb910r608ne0g55q0qcathqk7tn65h2k.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

    <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default DriveUploadTutorial;