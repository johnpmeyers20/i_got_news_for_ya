import React from "react";
import { useParams } from "react-router-dom";

function Article({ headlines }) {
  const { publishedAt } = useParams();
  const headline = headlines.find(
    (headline) => headline.publishedAt === publishedAt
  )
  console.log('well there it is!', headline)
  return (
    <div>
      <img
        className="article-image"
        src={headline && headline.image}
        alt=""
        width="300px"
      ></img>
      <h3>{headline && headline.title}</h3>
      <p>
        Read more:{" "}
        <a href={headline && headline.url}>{headline && headline.url}</a>
      </p>
    </div>
  );
}

export default Article;
