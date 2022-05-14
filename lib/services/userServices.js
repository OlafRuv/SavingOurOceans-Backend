const { use } = require("express/lib/application");
const User = require("./../models/user");

class UserServices {
  static createUser(id, name,lastname, email, password, country, state){
    return new User(id, name, lastname, email, password, country, state);
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
    }
    return userInfo
  }

}
module.exports = UserServices;