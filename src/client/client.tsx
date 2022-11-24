import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react';
import { App } from './components/app'
import config from './auth/app.config'
import './styles/index.scss'

function onAuthRequired({ history }: {history: any}) {
  history.push('/login');
}

ReactDOM.hydrate(
  <BrowserRouter>
  <Security
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}
    >
    <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
)
