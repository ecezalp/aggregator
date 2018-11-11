import * as React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

import '../styles/main.scss';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


export default function App() {

  const store = createStore(rootReducer);

  return <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>;
}

