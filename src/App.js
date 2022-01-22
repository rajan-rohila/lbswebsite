import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default withAuthenticator(App);
