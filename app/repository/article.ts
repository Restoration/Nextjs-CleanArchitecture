
import ArticleRepository from "../interface/repository/article";
import ArticleDriver from "../interface/driver/article";
import { Article } from "../domain/article";


export default class ArticleRepositoryImpl implements ArticleRepository {
  private readonly ArticleDriver: ArticleDriver;

  constructor(articleDriver: ArticleDriver) {
    this.ArticleDriver = articleDriver;
  }

  async findAll(): Promise<Article[]> {
    const res = await this.ArticleDriver.findAll();
    return res.map(
      articleEntity =>
        new Article(
          articleEntity.id,
          articleEntity.title,
          articleEntity.userId,
          articleEntity.body,
        )
    );
  }
}