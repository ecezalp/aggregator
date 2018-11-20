import * as React from 'react';
import {theme1} from "../../constants/colors";
import githubLogo from "../../../resources/images/github-logo.png";
import homeLogo from "../../../resources/images/orbital-rays.png";

const Navbar = ({theme = theme1}) => {

  const style = {
    backgroundColor: theme1['main'][50],
    width: '100vw',
    height: '8vh',
    position: 'fixed',
    top: 0,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme1['gray'][0],
    fontFamily: `'Comfortaa', sans-serif`,
  };

  const githubStyle = {
    height: '32px',
    width: '32px',
    backgroundImage: `url(${githubLogo})`,
    margin: '0 10vh',
  };

  const homeStyle = {
    height: '40px',
    backgroundSize: '40px 40px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${homeLogo})`,
  };

  const titleStyle = {
    padding: '0 10vh',
    textDecoration: 'none',
    color: theme1['gray'][0],
    display: 'flex',
    alignItems: 'center',
  };

  return <nav
    className="navbar"
    style={style}
  >
    <div style={titleStyle}>
      <a href="/" style={{width: '40px'}}>
        <div style={homeStyle}/>
      </a>
      <a href="/" style={{margin: '0 1vh'}}>
        <h1>link loop</h1></a>
    </div>
    <a href="https://github.com/ecezalp/aggregator" target="_blank">
      <div style={githubStyle}/>
    </a>
  </nav>
};

export default Navbar;