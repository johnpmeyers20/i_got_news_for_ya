import React from 'react'
import {Link} from 'react-router-dom'

function SubjectFilter(props) {
  const covidTitles = props.headlines.filter(headline => headline.title.match(/covid/ig) || headline.title.match(/corona/ig))
  const listCovidArticles = covidTitles.map((headline) => {
    return (
      <li key={headline.unique}>
        <Link to={`/${props.source}/${headline.unique}`}>
          <strong>{headline.source}</strong> - {headline.title}
        </Link>
      </li>
    )
  });
  
  return (
    <>
      <h2>COVID-19 Related Articles</h2>
      <ul>
      {listCovidArticles}
      </ul>
    </>
  )
}

export default SubjectFilter
