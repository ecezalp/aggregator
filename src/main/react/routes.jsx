import * as React from 'react';
import {Route} from 'react-router-dom';

import CardIndex from './components/pages/cardsIndex';
import {theme1} from "./constants/colors";
import Navbar from "./components/atoms/navbar";

import squairy_light from '../resources/images/squairy_light.png';

export default function Routes() {

  const style = {
    height: 'auto',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '7vh',
    backgroundImage: `url(${squairy_light})`,
  };

  const test = ({match}) => <CardIndex username={match.params.username}/>;

  return <div className="app-container" style={style}>
    <Navbar theme={theme1}/>
    <Route exact path="/u/:username" component={test}/>
  </div>;
}

