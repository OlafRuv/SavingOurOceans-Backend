const Article = require("./../../../lib/models/articles"); 

describe("Articles model",() =>{
	test("1) Create article", () => {
		const article = new Article(1,"Article 1","Author 1","Summary 1",["keyword1","keyword2","keyword3"],"lorem ipsum",100);

		expect(article).not.toBeNull();
		expect(article.id).toBe(1);
		expect(article.title).toBe("Article 1");
		expect(article.author).toBe("Author 1");
		expect(article.summary).toBe("Summary 1");
		expect(article.keywords).toStrictEqual(["keyword1","keyword2","keyword3"]);
		expect(article.content).toBe("lorem ipsum");
		expect(article.points).toBe(100);
	});
    
	test("2) Test Article setters", () => {
		const article = new Article(2,"Article 2","Author 2","Summary 2",["keyword4","keyword5","keyword6"],"lorem ipsum 2",200);

		article.setId = 1;
		article.setTitle = "Article 1";
		article.setAuthor = "Author 1";
		article.setSummary = "Summary 1";
		article.setKeywords = ["keyword1","keyword2","keyword3"];
		article.setContent = "lorem ipsum";
		article.setPoints = 100;

		expect(article).not.toBeNull();
		expect(article.id).toBe(1);
		expect(article.title).toBe("Article 1");
		expect(article.author).toBe("Author 1");
		expect(article.summary).toBe("Summary 1");
		expect(article.keywords).toStrictEqual(["keyword1","keyword2","keyword3"]);
		expect(article.content).toBe("lorem ipsum");
		expect(article.points).toBe(100);
	});

	test("3) Test Article getters", () => {
		const article = new Article(1,"Article 1","Author 1","Summary 1",["keyword1","keyword2","keyword3"],"lorem ipsum",100);

		expect(article).not.toBeNull();
		expect(article.getId).toBe(1);
		expect(article.getTitle).toBe("Article 1");
		expect(article.getAuthor).toBe("Author 1");
		expect(article.getSummary).toBe("Summary 1");
		expect(article.getKeywords).toStrictEqual(["keyword1","keyword2","keyword3"]);
		expect(article.getContent).toBe("lorem ipsum");
		expect(article.getPoints).toBe(100);
	});
});