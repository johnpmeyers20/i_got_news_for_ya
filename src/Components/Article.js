import React from 'react'
import { useParams } from 'react-router-dom';

function Article({headlines}) {
  const { publishedAt } = useParams()
  const headline = headlines.find(headline => headline.publishedAt === publishedAt)
  return (
    <div>
      <img className='article-image' src={headline && headline.urlToImage} alt='' width='300px'></img>
      <h3>{headline && headline.title}</h3>
      <p>{headline && headline.content}</p>
      <p>Read more: <a href={headline && headline.url}>{headline && headline.url}</a></p>
    </div>
  )
}

export default Article;