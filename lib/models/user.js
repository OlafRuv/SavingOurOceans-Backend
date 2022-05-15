class User{
	constructor( name, lastname, email, password,country, state){
		// this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.points = 0;
		this.country = country;
		this.state = state;
		this.creationDate = new Date();
	}
	get getId(){
		return this.id;
	}
	get getName(){
		return this.name;
	}
	get getLastname(){
		return this.lastname;
	}
	get getEmail(){
		return this.email;
	}
	get getPassword(){
		return this.password;
	}
	get getPoints(){
		return this.points;
	}
	get getCountry(){
		return this.country;
	}
	get getState(){
		return this.state;
	}
	get getCreationDate(){
		return this.creationDate;
	}



	set setEmail(email){
		this.email = email;
	}
	set setPassword(password){
		this.password = password;
	}
	set setPoints(points){
		this.points = points;
	}
	set setCountry(country){
		this.country = country;
	}
	set setState(state){
		this.state = state;
	}

}

module.exports = User;