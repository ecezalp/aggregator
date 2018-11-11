import * as React from 'react';
import {Route} from 'react-router-dom';

export default function Routes() {

  const landing = () => <h1>hello ece welcome home!</h1>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
  </div>;
}

