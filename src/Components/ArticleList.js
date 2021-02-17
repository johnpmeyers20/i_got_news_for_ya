import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList(props) {
  return (
    <ul>  
    {props.headlines.map((headline) => {
      return (
        <li key={headline.unique}>
          <Link to={`/${headline.source}/${headline.unique}`}>
            <strong>
              {headline.source}
            </strong> - {headline.title}
          </Link>
        </li>
      )
    })}
    </ul>
  )
}

export default ArticleList