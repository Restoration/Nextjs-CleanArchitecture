import React from "react";
import { useArticleHooks } from "../services/article";


const Articles = () => {
  const { articles } = useArticleHooks();
  return (
    <>
      {articles.map(article => {
        console.log(article)
        return ( 
          <div key={article.id}><div>{article.title}</div></div>
        );
      })}
    </>
  );
};

export default Articles;