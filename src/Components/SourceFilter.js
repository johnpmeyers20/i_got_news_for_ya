import React from 'react'
import {Link} from 'react-router-dom'

function SourceFilter(props) {
  const relevantHeadlines = props.headlines.filter(headline => headline.source.name === props.source)
  return (
    <>
      {relevantHeadlines.map(headline => {
        return (
          <>
          <h3>{props.source}</h3>
            <ul>
              <li>
                <Link to={`/source/${headline.publishedAt}`}>
                  {headline.title.slice(0, (headline.title.indexOf('-') - 1)).replace(/%/g, ' percent')}
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
