class Task{
	constructor(id,description,points,itsDone,itsAvailable){
		this.id = id;
		this.description = description;
		this.points = points;
		this.itsDone = itsDone;
		this.itsAvailable = itsAvailable;
		this.date = new Date();
	}

	get getId(){
		return this.id;
	}
	get getDescription(){
		return this.description;
	}
	get getPoints(){
		return this.points;
	}
	get getItsDone(){
		return this.itsDone;
	}
	get getDate(){
		return this.date;
	}
	get getItsAvailable(){
		return this.itsAvailable;
	}

	set setId(id){
		this.id = id;
	}
	set setDescription(description){
		this.description = description;
	}
	set setPoints(points){
		this.points = points;
	}
	set setItsDone(done){
		this.itsDone = done;
	}
	set setDate(date){
		this.date = date;
	}
	set setItsAvailable(available){
		this.itsAvailable = available;
	}
}

module.exports = Task;