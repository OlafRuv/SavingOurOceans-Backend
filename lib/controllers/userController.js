const UserServices = require("./../services/userServices");

class UserController{
  static createUser(id, name, lastname, email, password, country, state){
    return UserServices.createUser(id, name,lastname, email, password, country, state);
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