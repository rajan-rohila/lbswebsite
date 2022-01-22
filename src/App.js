import React from 'react';
import './App.css';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import Routes from "./Routes";

function App() {
    return (
        <div className="App">
            <Routes />
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);