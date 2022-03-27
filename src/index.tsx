import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { continentsClient } from './services/continentsClient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={continentsClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);