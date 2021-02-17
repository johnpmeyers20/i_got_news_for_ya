import React from 'react'
import {Link} from 'react-router-dom'

function SourceFilter(props) {
  const relevantHeadlines = props.headlines.filter(headline => headline.source === props.source)
  const relevantHeadlineListItems = relevantHeadlines.map((headline, i) => {
    return (
      <li key={headline.unique}>
        <Link to={`/${props.source}/${headline.unique}`}>
          {headline.title}
        </Link>
      </li>
    )
  });
  
  return (
    <>
      <h3>{props.source}</h3>
      <ul>
        {relevantHeadlineListItems}
      </ul>
    </>
  )
}

export default SourceFilter