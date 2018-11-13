import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Welcome} from '@storybook/react/demo';

import Button from '../components/atoms/button';
import {theme1} from '../constants/colors';
import Navbar from "../components/atoms/navbar";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Color', module)
  .add('theme', () => {
      const colorBox = hex => <div style={{height: '30px', width: '100px', backgroundColor: `${hex}`}}/>;
      return (<div style={{display: 'flex'}}>
        {Object.keys(theme1).map(key => theme1[key]).map(item => Object.values(item).map(colorBox))}
      </div>)
    }
  );

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀😀😀
      </span>
    </Button>
  ));


storiesOf('Navbar', module)
  .add('navbar', () => (
    <Navbar theme={theme1}/>
  ));


