const Article = require("./../models/articles");

class ArticleServices{
  static createArticle(id, title, author, summary, keywords, content, points){
    return new Article(id,title,author,summary,keywords,content,points);
  }
  static getInfo(article){
    const articleInfo = {
      id: article.getId,
      title: article.getTitle,
      author: article.getAuthor,
      summary: article.getSummary,
      keywords: article.getKeywords,
      points: article.getPoints
    }
    return articleInfo;
  } 
}
module.exports = ArticleServices;