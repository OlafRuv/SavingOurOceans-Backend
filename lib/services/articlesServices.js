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
		};
		return articleInfo;
	} 
	static getPoints(article){
		return article.getPoints;
	}
	static getTitle(article){
		return article.getTitle;
	}
	static getSummary(article){
		return article.getSummary;
	}
	static updatePoints(article, points){
		article.setPoints = points;
		return this.getPoints;
	}
	static updateTitle(article, title){
		article.setTitle = title;
		return this.getTitle;
	}
	static updateSummary(article, summary){
		article.setSummary = summary;
		return this.getSummary;
	}

}
module.exports = ArticleServices;