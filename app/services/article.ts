import { useEffect, useState } from "react";
import { Article } from "../domain/article";
import ArticleDriverImpl from "../driver/article";
import ArticleRepositoryImpl from "../repository/article";
import ArticleUseCaseImpl from "../useCase/article";

const repository = new ArticleRepositoryImpl(new ArticleDriverImpl());
const useCase = new ArticleUseCaseImpl(repository);

export const useArticleHooks = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setArticles(await useCase.fetchArticles());
  };

  return {
    fetchArticles,
    articles
  }
};