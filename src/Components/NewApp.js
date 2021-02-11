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

const mediastackUrl = `http://api.mediastack.com/v1/news?access_key=${mAPIKey}&sources=en&countries=us,ca&sort=published_desc&limit=50`;

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

//The pair below was the first succesfull hit I had on the API
//I modded it further above

// const getLiveNews = async () => {
//   let url = mediastackUrl;
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