import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function SourceButtons(props) {
  const uniqueIdentifier = (headline) => {
    return headline.source + headline.published_at + headline.title.split(' ')[0];
  }
  const unique = (x, i, a) => a.indexOf(x) === i;
  let headlines = props.headlines.map(headline => headline.source)
  let sources = headlines.filter(unique)
  return (
    <nav>
      {sources.map(source => <button onClick={() => props.button(`${source}`)} key={`srcButton(${source})`}><Link to={`/source/`}>{source}</Link></button>)}
    </nav>
  )
}

export default SourceButtons