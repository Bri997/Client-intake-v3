import React from 'react'
import './App.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import Home from "../src/Pages/Home"

Amplify.configure(awsconfig)

function App() {
  return (
    <div>
      <AmplifySignOut />
      
      <Home />
      
    </div>
  )
}

export default withAuthenticator(App)
