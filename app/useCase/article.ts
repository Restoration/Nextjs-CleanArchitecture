import { Article } from "../domain/article";
import { ArticleUseCase } from "../interface/useCase/article";
import ArticleRepository from "../interface/repository/article";

export default class ArticleUseCaseImpl implements ArticleUseCase {
  readonly articleRepository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.articleRepository = repository;
  }

  async fetchArticles(): Promise<Article[]> {
    return await this.articleRepository.findAll();
  }
}