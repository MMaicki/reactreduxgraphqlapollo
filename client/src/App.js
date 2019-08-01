import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './Reducers/rootreducer'
import Home from './components/Home/home'

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`
})

const INITIAL_STATE = {}

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Home/>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
