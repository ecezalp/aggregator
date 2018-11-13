import * as React from 'react';
import {theme1} from "../../constants/colors";
import githubLogo from "../../../resources/images/github-logo.png";

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

  const logoStyle = {
    height: '32px',
    width: '32px',
    backgroundImage: `url(${githubLogo})`,
    margin: '0 10vh',
  };

  const titleStyle = {
    padding: '0 10vh',
    textDecoration: 'none',
    color: theme1['gray'][0],
  };

  return <nav
    className="navbar"
    style={style}
  >
    <a href="/"><h1 style={titleStyle}>ece's link aggregator</h1></a>
    <a href="https://github.com/ecezalp/aggregator" target="_blank"><div style={logoStyle}/></a>
  </nav>
};

export default Navbar;