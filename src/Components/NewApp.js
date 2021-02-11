import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Header from "./Header.js";
import SubjectFilter from "./SubjectFilter.js";
import SourceButtons from "./SourceButtons.js";
import SourceFilter from "./SourceFilter.js";
import ArticleList from "./ArticleList.js";
import Article from "./Article.js";

import "../App.css";

const baseUrl = "https://newscatcher.p.rapidapi.com";
const latestHeadlines = "/v1/latest_headlines";
const topHeadlines = baseUrl + latestHeadlines;
const searchUrl = "/v1/search";
const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
console.log(topHeadlines);
const options = {
  method: 'GET',
  url: topHeadlines,
  params: {lang: 'en', media: 'True'},
  headers: {
    'x-rapidapi-key': apiKey,
  }
};

const userSearch = {
  method: 'GET',

}

function NewApp() {
  const [headlines, setHeadlines] = useState([]);
  const [source, setSource] = useState([]);

  // In order to use an object:
  // const [object, setObject] = useState({
  //   headlines: [],
  //   source: []
  //  })

  useEffect(() => {
    const getHeadlines = async () => {
      const resp = await axios.request(options);
      const headlines = resp.data.articles;
      console.log(headlines);
      setHeadlines(headlines);
    };
    getHeadlines();
  }, []);

  const recordButton = (src) => {
    setSource(src);
  };

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
          <Route exact path='/'><ArticleList headlines={headlines} /></Route>
          <Route exact path='/covid-19/'><SubjectFilter headlines={headlines} /></Route>
          <Route exact path='/source/'><SourceFilter headlines={headlines} source={source}/></Route>
          <Route path="/covid-19/:publishedAt"><Article headlines={headlines} /></Route>
          <Route path="/article/:publishedAt"><Article headlines={headlines} /></Route>
          <Route path='/source/:publishedAt'><Article headlines={headlines} /></Route>
        </div>
        <footer className="footer">JP Meyers</footer>
      </div>
    </>
  );
}

export default NewApp;

// The Route's below are from prior to my hooks refactoring
// <Route exact path="/" render={(props) => <ArticleList {...props} headlines={headlines} />} />
// <Route exact path="/covid-19/" render={(props) => (<SubjectFilter {...props} headlines={headlines} />)}/>
// <Route exact path="/source/" render={(props) => (<SourceFilter {...props} headlines={headlines} source={source} />)}/>
// <Route path='/covid-19/:publishedAt' render={props => <Article {...props} headlines={headlines} />} />
// <Route path="/source/:publishedAt" render={(props) => <Article {...props} headlines={headlines} />}/>