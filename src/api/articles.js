import axios from "./axios";

const ArticlesService = {
  articles() {
    return axios.get("/articles");
  },
  article(slug) {
    return axios.get(`/articles/${slug}`);
  },
  createArticle(data) {
    return axios.post('/articles', {article: data})
  }
}

export default ArticlesService