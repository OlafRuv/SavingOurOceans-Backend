class User{
	constructor(name, lastname, email, password, country, state){
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.country = country;
		this.state = state;
		this.creationDate = new Date();
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
	get getCountry(){
		return this.country;
	}
	get getState(){
		return this.state;
	}
	get getCreation(){
		return this.creationDate;
	}


	set setEmail(email){
		this.email = email;
	}
	set setPassword(password){
		this.password = password;
	}
	set setCountry(country){
		this.country = country;
	}
	set setState(state){
		this.state = state;
	}

}

module.exports = User;