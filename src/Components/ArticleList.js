import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList(props) {
  const uniqueIdentifier = (headline) => {
    return headline.source + headline.published_at + headline.title.split(' ')[0];
  }
  return (
    <>
      {props.headlines.map((headline) => {
        return (
          <div key={uniqueIdentifier(headline)}>
            <ul>
              <li key={uniqueIdentifier(headline)}>
                <Link to={`/article/${uniqueIdentifier(headline)}`}>
                  <strong>
                    {headline.source}
                  </strong> - {headline.title}
                </Link>
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default ArticleList