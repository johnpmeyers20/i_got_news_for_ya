import React from 'react'

function Article(props) {
  console.log(props)
  const { match, headlines } = props
  const headline = headlines.find(headline => headline.publishedAt === match.params.publishedAt)
  console.log(headline)
  return (
    <div>
      <img src={headline && headline.urlToImage} alt='' width='300px'></img>
      <h3>{headline && headline.title}</h3>
      <p>{headline && headline.content}</p>
      <p>Read more: <a href={headline && headline.url}>{headline && headline.url}</a></p>
    </div>
  )
}

export default Article