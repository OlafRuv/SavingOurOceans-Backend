const UserController = require("./../../../lib/controllers/userController");

const userObject = {
	name: "nombre",
	lastname: "apellido",
	email: "correo@correo.mx",
	password: "1234",
	country: "mexico",
	state: "chihuahua"
};

describe("Users",() =>{
	test("1) Create user", () => {

		const user = UserController.createUser(userObject);
   
		console.log(user);
		
		expect(user).not.toBeNull();
		expect(user.name).toBe("nombre");
		expect(user.lastname).toBe("apellido");
		expect(user.email).toBe("correo@correo.mx");
		expect(user.password).toBe("1234");
		expect(user.points).toBe(0);
		expect(user.country).toBe("mexico");
		expect(user.state).toBe("chihuahua");
	});
	test("2) Test getUserInfo", () => {
		const user = UserController.createUser(userObject);

		expect(UserController.getUserInfo(user)).toBeInstanceOf(Object);
	});
	test("3) Test addPoints and subtractPoints", () => {
		const user = UserController.createUser(userObject);
		UserController.addPoints(user, 123);
		expect(UserController.getPoints(user)).toBe(123);
		UserController.subtractPoints(user, 23);
		expect(UserController.getPoints(user)).toBe(100);
	});
});