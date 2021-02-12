import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList(props) {
  return (
    <ul>  
    {props.headlines.map((headline) => {
      return (
        <div key={headline.unique}>
            <li key={headline.unique}>
              <Link to={`/article/${headline.unique}`}>
                <strong>
                  {headline.source}
                </strong> - {headline.title}
              </Link>
            </li>
        </div>
      )
    })}
    </ul>
  )
}

export default ArticleList