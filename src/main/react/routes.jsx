import * as React from 'react';
import {Route} from 'react-router-dom';

import CardIndex from './components/pages/cardsIndex';
import {theme1} from "./constants/colors";

export default function Routes() {

  const style = {
    height: 'auto',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme1['gray'][30],
  };

  const test = () => <CardIndex/>;

  return <div className="app-container" style={style}>
    <Route exact path="/" component={test}/>
  </div>;
}

