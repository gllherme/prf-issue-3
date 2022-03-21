import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { continentsClient } from './services/continentsClient';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={continentsClient}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);