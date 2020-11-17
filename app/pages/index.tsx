import React from "react";
import ArticlePresenter from "../presenter/Article";

import ArticleDriverImpl from "../infrastructure/article";
import ArticleRepositoryImpl from "../repository/article";
import ArticleUseCaseImpl from "../useCase/article";

const repository = new ArticleRepositoryImpl(new ArticleDriverImpl());
const useCase = new ArticleUseCaseImpl(repository);

const App = () => {
  return <ArticlePresenter useCase={useCase} />;
};

export default App;