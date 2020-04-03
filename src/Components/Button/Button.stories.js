import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


const style = {
  backgroundColor: '#0069D9',
  color: 'white',
  borderRadius: '2px',
  padding: '5px 25px',
  border: '#0069D9'
}

storiesOf('Button', module)
  .add('Primary', () => <Button
      label="Primary"
      style={style}
  />)
    