import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import './Button.css'

storiesOf('Button', module)
  .add('Home', () => <Button label="Home" classorama='home'/>)
  .add('COVID-19', () => <Button label="COVID-19" classorama='covid' />)
  .add('NavButtons', () => <Button label="NavButtons" classorama='navbuttons'/>)
  