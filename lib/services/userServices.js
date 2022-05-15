const User = require("./../models/user");

class UserServices {
	static createUser( name,lastname, email, password, country, state){
		return new User( name, lastname, email, password, country, state);
	}
	static getUserInfo(user){
		const userInfo = {
			id: user.id,
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			password: user.password,
			country: user.country,
			state: user.state,
		};
		return userInfo;
	}
	static getPoints(user){
		return user.getPoints;
	}
	static addPoints(user, points){
		const newPoints = user.getPoints + points;
		user.setPoints=  newPoints;
		return user;
	}
	static subtractPoints(user, points){
		const newPoints = user.getPoints - points;
		if(newPoints<0)
			return "Error: Puntos insuficientes";
		user.setPoints = newPoints;
		return user;
	}
  
}
module.exports = UserServices;