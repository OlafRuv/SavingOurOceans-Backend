const ArticleServices = require("./../../../lib/services/articlesServices"); 

describe("ArticleServices model",() =>{
	test("1) Create article", () => {
		const article = ArticleServices.createArticle(1,"Article 1","Author 1","Summary 1",["keyword1","keyword2","keyword3"],"lorem ipsum",100);
    
		expect(article).not.toBeNull();
		expect(article.id).toBe(1);
		expect(article.title).toBe("Article 1");
		expect(article.author).toBe("Author 1");
		expect(article.summary).toBe("Summary 1");
		expect(article.keywords).toStrictEqual(["keyword1","keyword2","keyword3"]);
		expect(article.content).toBe("lorem ipsum");
		expect(article.points).toBe(100);
	});
  
	test("2) Test getInfo", () => {
		const article = ArticleServices.createArticle(1,"Article 1","Author 1","Summary 1",["keyword1","keyword2","keyword3"],"lorem ipsum",100);
		
		const articleInfo = ArticleServices.getInfo(article); 
		expect(articleInfo).not.toBeNull();
		expect(articleInfo).toBeInstanceOf(Object);
		expect(articleInfo.id).toBe(1);
	});
	test("2) Test updates", () => {
		const article = ArticleServices.createArticle(1,"Article 1","Author 1","Summary 1",["keyword1","keyword2","keyword3"],"lorem ipsum",100);
		ArticleServices.updatePoints(article, 50);
		ArticleServices.updateTitle(article, "new article name");
		ArticleServices.updateSummary(article, "new summary");
    
		expect(ArticleServices.getPoints(article)).toBe(50);
		expect(ArticleServices.getTitle(article)).toBe("new article name");
		expect(ArticleServices.getSummary(article)).toBe("new summary");
	});

  
});