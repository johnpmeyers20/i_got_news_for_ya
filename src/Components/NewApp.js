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

const mediastackSources = '&sources=cnn,bbc,nytimes,euronews,espn,cbs,msnbc,skynews,aljazeera,bbc,usatoday,guardian,time,fox,tmz,huffpost'
const liveNewsUrl = `http://api.mediastack.com/v1/news?access_key=${mAPIKey}&languages=en&countries=us,ca,gb&sort=popularity&limit=100` + mediastackSources;

const uniqueIdentifier = (headline) => {
  return (headline.source + headline.published_at + headline.title.split(' ')[0]).toString().match(/\w/g).join('');
}

function NewApp() {
  const [headlines, setHeadlines] = useState([]);
  const [source, setSource] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      const resp = await axios.get(liveNewsUrl);
      const headlines = resp.data.data;
      const uHeadlines = headlines.filter((headline, index, arr) => arr.map(mapObj => mapObj.title).indexOf(headline.title) === index);
      const uHeadWithU = uHeadlines.map(obj => ({ ...obj, unique: uniqueIdentifier(obj) }));
      console.log(uHeadWithU);
      setHeadlines(uHeadWithU);
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
          <Route path='/:source'><SourceFilter headlines={headlines} source={source}/></Route>
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

//The pair below was the first succesfull hit I had on the API
//I modded it further above

// const getLiveNews = async () => {
//   let url = liveNewsUrl;
//   const resp = await axios.get(url);
//   console.log('Axios response from getting live news', resp.data.data.length);
//   console.log(resp.data.data);
//   return resp.data.data;
// }

  // useEffect(() => {
  //   const getHeadlines = () => {
  //     const resp = getLiveNews();
  //     console.log(resp);
  //     setHeadlines(resp);
  //   };
  //   getHeadlines();
  // }, []);