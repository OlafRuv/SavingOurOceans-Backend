const { use } = require("express/lib/application");
const UserServices = require("./../services/userServices");
const Validators = require("./../utils/validators");

class UserController{
	static validateUser(user){
		if(Validators.nullValidator(user)){
			return "Error null value;";
		}else if(Validators.intValidator(user.id) || Validators.stringValidator(user.name) ||Validators.stringValidator(user.lastname)|| Validators.stringValidator(user.email)|| Validators.stringValidator(user.password)|| Validators.stringValidator(user.country)|| Validators.stringValidator(user.state))
			return "Error incorrect variable types";
		else
			return "All good";
	}

	static createUser(user){
		const validation = this.validateUser(user);
		if( validation!= "All good"){
			return validation;
		}
		return UserServices.createUser(user.id, user.name, user.lastname, user.email, user.password, user.country, user.state);
	}
	static getUserInfo(user){
		return UserServices.getUserInfo(user);
	}
	static getPoints(user){
		return UserServices.getPoints(user);
	}
	static addPoints(user, points){
		return UserServices.addPoints(user, points);
	}
	static subtractPoints(user, points){
		return UserServices.subtractPoints(user, points);
	}	
}
module.exports = UserController;