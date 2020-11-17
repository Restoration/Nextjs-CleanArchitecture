import React from "react";
import { Article } from "../domain/article";

type Props = {
  articles: Article[];
};

const Articles = ({ articles }: Props) => {
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