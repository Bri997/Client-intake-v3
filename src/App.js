import React from 'react'
import './App.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function App() {
  return (
    <div>
      <AmplifySignOut />
      My App
    </div>
  )
}

export default withAuthenticator(App)
