import * as React from 'react';
import {theme1} from "../../constants/colors";
import {githubLogo} from "../../../resources/images/github-logo.svg";

const Navbar = ({theme = theme1}) => {

  const style = {
    backgroundColor: theme1['main'][50],
    width: '100vw',
    height: '8vh',
    position: 'fixed',
    top: 0,
  };

  console.log(githubLogo);

  return <nav
    className="navbar"
    style={style}
  >
    <a href="https://github.com/ecezalp/aggregator" target="_blank">{githubLogo}</a>
  </nav>
};

export default Navbar;