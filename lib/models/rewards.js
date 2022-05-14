class Rewards{
	constructor(id,sponsor,code,pointsValue,name,type,deadLine){
		this.id = id;
		this.sponsor = sponsor;
		this.code = code;
		this.pointsValue = pointsValue;
		this.name = name;
		this.type = type;
		this.deadLine = deadLine;
	}

	get getId(){
		return this.id;
	}
	get getSponsor(){
		return this.sponsor;
	}
	get getCode(){
		return this.code;
	}
	get getPointsValue(){
		return this.pointsValue;
	}
	get getName(){
		return this.name;
	}
	get getType(){
		return this.type;
	}
	get getDeadLine(){
		return this.deadLine;
	}

	set setId(id){
		this.id = id;
	}
	set setSponsor(sponsor){
		this.sponsor = sponsor;
	}
	set setCode(code){
		this.code = code;
	}
	set setPointsValue(pointsValue){
		this.pointsValue = pointsValue;
	}
	set setName(name){
		this.name = name;
	}
	set setType(type){
		this.type = type;
	}
	set setDeadLine(deadLine){
		this.deadLine = deadLine;
	}
}

module.exports = Rewards;