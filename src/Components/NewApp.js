import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'

import Header from './Header.js'
import SubjectFilter from './SubjectFilter.js'
import SourceButtons from './SourceButtons.js'
import SourceFilter from './SourceFilter.js'
import ArticleList from './ArticleList.js'
import Article from './Article.js'

import '../App.css';

const baseUrl = 'https://newsapi.org/v2/'
const topHeadlinesEndpoint = 'top-headlines?'
const langCountry = 'language=en&country=us&'
const apiKey = 'apiKey=081c6cf976f54e9287be428fb57a16dd'
const topHeadlines = baseUrl + topHeadlinesEndpoint + langCountry + apiKey

function NewApp () {
  const [headlines, setHeadlines] = useState([]) 
  const [source, setSource] = useState([])

  // In order to use an object:
  // const [object, setObject] = useState({ 
  //   headlines: [],
  //   source: []
  //  })

  useEffect(() => { 
    const getHeadlines = async () => {
      const resp = await axios.get(topHeadlines)
      const headlines = resp.data.articles
      setHeadlines(headlines)
    }
    getHeadlines()
  }, [])
  

  const recordButton = (src) => {
    setSource(src)
  }

  return (
    <>
      <div className="main-container">
        <div className="header">
          <Header headlines={headlines} />
        </div>
        <div className="nav">
          <SourceButtons headlines={headlines} button={recordButton} />
        </div>
        <div className="content">
          <Route exact path='/' render={props => <ArticleList {...props} headlines={headlines} />} />
          <Route exact path='/covid-19/' render={props => <SubjectFilter {...props} headlines={headlines} />} />
          <Route exact path='/source/' render={props => <SourceFilter {...props} headlines={headlines} source={source} />} />
          <Route path='/covid-19/:publishedAt' render={props => <Article {...props} headlines={headlines} />} />
          <Route path='/article/:publishedAt'><Article headlines={headlines}/></Route>
          <Route path='/source/:publishedAt' render={props => <Article {...props} headlines={headlines} />} />
        </div>
        <footer className="footer">JP Meyers</footer>
      </div>
    </>
  )
}


export default NewApp
