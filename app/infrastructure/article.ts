import ArticleDriver, { ArticleJson } from "../interface/driver/article";

export default class ArticleDriverImpl implements ArticleDriver {
  async findAll(): Promise<ArticleJson[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  }
}