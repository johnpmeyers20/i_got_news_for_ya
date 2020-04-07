import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button/Button.js'

import '../App.css';

function Header(props) {
  return (
    <div>
      <h1>I Got News For Ya!</h1>
      <Link to='/'>
        <Button classorama='home' label='Home'/>
        {/* <button>Home</button> */}
      </Link>
      <Link to='/covid-19/'>
        <Button classorama='covid' label='COVID-19'/>
      </Link>
    </div>
  )
}

export default Header