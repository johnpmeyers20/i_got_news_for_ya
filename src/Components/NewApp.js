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

const mAPIKey = process.env.REACT_APP_MEDIASTACK_API_KEY;

const mediastackUrl = `http://api.mediastack.com/v1/news?access_key=${mAPIKey}&sources=en`;

// const getLiveNews = async () => {
//   let url = mediastackUrl;
//   const resp = await axios.get(url);
//   console.log('Axios response from getting live news', resp.data.data.length);
//   console.log(resp.data.data);
//   return resp.data.data;
// }

function NewApp() {
  const [headlines, setHeadlines] = useState([]);
  const [source, setSource] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      const resp = await axios.get(mediastackUrl);
      const headlines = resp.data.data;
      console.log(headlines);
      setHeadlines(headlines);
    };
    getHeadlines();
  }, []);

  // useEffect(() => {
  //   const getHeadlines = () => {
  //     const resp = getLiveNews();
  //     console.log(resp);
  //     setHeadlines(resp);
  //   };
  //   getHeadlines();
  // }, []);

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

// const options = {
//   method: 'GET',
//   url: topHeadlines,
//   params: {lang: 'en', media: 'True'},
//   headers: {
//     'x-rapidapi-key': apiKey,
//   }
// };

// const options = {
//   method: 'GET',
//   url: 'https://newscatcher.p.rapidapi.com/v1/search',
//   params: {q: 'Elon Musk', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
//   headers: {
//     'x-rapidapi-key': apiKey,
//     'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
//   }
// };

// const options = {
//   headers: {"Access-Control-Allow-Origin": "*"},
//   method: 'GET',
//   url: 'https://api.mediastack.com/v1/news',
//   data: {
//     access_key: mAPIKey,
//     languages: 'en',
//     countries: 'us',
//     limit: 30,
//     offset: 30,
//   }
// };

// const options = {
//   url: 'http://api.mediastack.com/v1/news',
//   data: {
//     access_key: mAPIKey,
//     languages: 'en',
//     countries: 'us',
//     limit: 30,
//     offset: 30,
//   }
// }

  // In order to use an object:
  // const [object, setObject] = useState({
  //   headlines: [],
  //   source: []
  //  })



  // useEffect(() => {
  //   $.ajax({
  //     url: 'http://api.mediastack.com/v1/news',
  //     data: {
  //       access_key: mAPIKey,
  //       languages: 'en',
  //       countries: 'us',
  //       limit: 30,
  //       offset: 30,
  //     }
  //   }).done((data) => {
  //     console.log(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const res = async () => { await $.ajax(options).done(data => console.log(data)) };
  //   console.log('haha', res);
  // }, []);