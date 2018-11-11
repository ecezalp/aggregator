import * as React from 'react';
import {Route} from 'react-router-dom';

import Test from './components/test';

export default function Routes() {

  const test = () => <Test/>;

  return <div className="app-container">
    <Route exact path="/" component={test}/>
  </div>;
}

