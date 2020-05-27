import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function SourceButtons(props) {
  const unique = (x, i, a) => a.indexOf(x) === i;
  let headlines = props.headlines.map(headline => headline.source.name)
  let sources = headlines.filter(unique)
  return (
    <nav>
      {sources.map(source => <button onClick={() => props.button(`${source}`)} key={`srcButton(${source})`}><Link to={`/source/`}>{source}</Link></button>)}
    </nav>
  )
}

export default SourceButtons