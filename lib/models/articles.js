class Article{
	constructor(id,title,author,summary,keywords,content,points){
		this.id = id;
		this.title = title;
		this.author = author;
		this.summary = summary;
		this.keywords = keywords;
		this.content = content;
		this.points = points;
	}

	get getId(){
		return this.id;
	}
	get getTitle(){
		return this.title;
	}
	get getAuthor(){
		return this.author;
	}
	get getSummary(){
		return this.summary;
	}
	get getKeywords(){
		return this.keywords;
	}
	get getContent(){
		return this.content;
	}
	get getPoints(){
		return this.points;
	}

	set setId(id){
		this.id = id;
	}
	set setTitle(title){
		this.title = title;
	}
	set setAuthor(author){
		this.author = author;
	}
	set setSummary(summary){
		this.summary = summary;
	}
	set setKeywords(keywords){
		this.keywords = keywords;
	}
	set setContent(content){
		this.content = content;
	}
	set setPoints(points){
		this.points = points;
	}
}

module.exports = Article;