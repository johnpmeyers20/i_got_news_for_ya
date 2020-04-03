import React from 'react'
import {Link} from 'react-router-dom'

function SubjectFilter(props) {
  const covidTitles = props.headlines.filter(headline => headline.title.match(/covid/ig) || headline.title.match(/corona/ig))
  // console.log(covidTitles.length)
  return (
    <>
      {covidTitles.map(title => {
        return (
          <ul>
            <li>
              <Link to={`/covid-19/${title.publishedAt}`}>
                <strong>{title.source.name}</strong> - {title.title.slice(0, (title.title.indexOf('-') - 1)).replace(/%/g, ' percent')}
              </Link>
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default SubjectFilter