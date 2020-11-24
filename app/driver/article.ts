import ArticleDriver, { ArticleJson } from "../interface/driver/article";
import AxiosClient from './axios';

export default class ArticleDriverImpl implements ArticleDriver {
  async findAll(): Promise<ArticleJson[]> {
    const res = await AxiosClient({ url: "https://jsonplaceholder.typicode.com/posts", method: 'GET' });
    return await res.data;
  }
}