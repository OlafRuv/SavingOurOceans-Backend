class task{
    constructor(id,description,points,itsDone){
        this.id = id
        this.description = description;
        this.points = points;
        this.itsDone = itsDone
        this.date = new Date()
    }

    get getId(){
        return this.Id
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

    set setId(id){
        this.id = id
    }
    set setDescription(description){
        this.description = description
    }
    set setPoints(points){
        this.points = points
    }
    set setItsDone(done){
        this.itsDone = done;
    }
    set setDate(date){
        this.date = date;
    }


}