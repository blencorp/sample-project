import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import App from './App'
import client from './apollo-client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
  </React.StrictMode>,
);
