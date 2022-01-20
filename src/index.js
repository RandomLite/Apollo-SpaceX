import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


ReactDOM.render(

  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();