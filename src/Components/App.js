import React from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import Header from './Header.js'
import SubjectFilter from './SubjectFilter.js'
import SourceButtons from './SourceButtons.js'
import SourceFilter from './SourceFilter.js'
import ArticleList from './ArticleList.js'
import Article from './Article.js'

import '../App.css';

const baseUrl = 'http://newsapi.org/v2/'
const topHeadlinesEndpoint = 'top-headlines?'
const langCountry = 'language=en&country=us&'
const apiKey = 'apiKey=' + process.env.REACT_APP_NEWS_API_KEY
const topHeadlines = baseUrl + topHeadlinesEndpoint + langCountry + apiKey

class App extends React.Component {
  constructor(props) {
    super(props)
    this.recordButton = this.recordButton.bind(this)
    this.state = {
      headlines: [],
      source: []
    }
  }

  componentDidMount = async () => {
    const resp = await axios.get(topHeadlines)
    const headlines = resp.data.articles
    this.setState({ headlines: headlines })
  }

  recordButton(src) {
    this.setState({ source: src })
    console.log(this.state.source)
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="header">
            <Header headlines={this.state.headlines} />
          </div>
          <div className="nav">
            <SourceButtons headlines={this.state.headlines} button={this.recordButton} />
          </div>
          <div className="content">
            <Route exact path='/' render={props => <ArticleList {...props} headlines={this.state.headlines} />} />
            <Route exact path='/covid-19/' render={props => <SubjectFilter {...props} headlines={this.state.headlines} />} />
            <Route exact path='/source/' render={props => <SourceFilter {...props} headlines={this.state.headlines} source={this.state.source}/>} />
            <Route path='/covid-19/:publishedAt' render={props => <Article {...props} headlines={this.state.headlines} />} />
            <Route path='/article/:publishedAt' render={props => <Article {...props} headlines={this.state.headlines} />} />
            <Route path='/source/:publishedAt' render={props => <Article {...props} headlines={this.state.headlines} />} />
          </div>
          <footer className="footer">JP Meyers</footer>
        </div>
      </>
    )
  }
}

export default App
