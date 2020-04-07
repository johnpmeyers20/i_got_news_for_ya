import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList(props) {
  return (
    <>
      {props.headlines.map(headline => {
        return (
          <div key={headline.publishedAt}>
            <ul>
              <li key={headline.publishedAt}>
                <Link to={`/article/${headline.publishedAt}`}>
                  <strong>
                    {headline.source.name}
                  </strong> - {headline.title.slice(0, (headline.title.indexOf('-') - 1)).replace(/%/g, ' percent')}
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