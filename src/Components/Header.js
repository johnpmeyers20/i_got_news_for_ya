import React from 'react'
import { Link } from 'react-router-dom'

import SourceButtons from './SourceButtons.js'

import '../App.css';

function Header(props) {
  return (
    <div>
      <h1>I Got News For Ya!</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/covid-19/'>
        <button>COVID-19</button>
      </Link>
      {/* <div className='nav'>
        <SourceButtons headlines={props.headlines} button={props.button} />
      </div> */}
    </div>
  )
}

export default Header