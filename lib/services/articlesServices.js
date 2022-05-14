const Article = require("./../models/articles");

class ArticleServices{
  static createArticle(id, title, author, summary, keywords, content, points){
    this.id = id;
    this.title = title;
    this.author = author;
    this.summary = summary;
    this.keywords = keywords;
    this.content = content;
    this.points = points;
  }

}