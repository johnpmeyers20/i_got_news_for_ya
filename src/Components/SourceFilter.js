import React from 'react'
import {Link} from 'react-router-dom'

function SourceFilter(props) {
  const relevantHeadlines = props.headlines.filter(headline => headline.source === props.source)
  return (
    <>
      <h3>{props.source}</h3>
      {relevantHeadlines.map(headline => {
        return (
          <>
            <ul>
              <li>
                <Link to={`/source/${headline.publishedAt}`}>
                  {headline.title}
                </Link>
              </li>
            </ul>
          </>
        )
      })}  
    </>
  )
}

export default SourceFilter
