import React from "react";
import "./App.css";
import { AmplifySignOut, Authenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Home from "../src/Pages/Home";
import SignUp from "../src/Pages/SignUp";

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <SignUp></SignUp>
      <AmplifySignOut />

      <Home />
    </div>
  );
}

export default App;
