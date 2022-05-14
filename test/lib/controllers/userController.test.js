const UserController = require("./../../../lib/controllers/userController");

describe("Users",() =>{
	test("1) Create user", () => {
		const user = UserController.createUser(1,"nombre", "apellido", "correo@correo.mx","1234","mexico", "chihuahua");
    
		expect(user).not.toBeNull();
		expect(user.id).toBe(1);
		expect(user.name).toBe("nombre");
		expect(user.lastname).toBe("apellido");
		expect(user.email).toBe("correo@correo.mx");
		expect(user.password).toBe("1234");
		expect(user.points).toBe(0);
		expect(user.country).toBe("mexico");
		expect(user.state).toBe("chihuahua");
	});
	test("2) Test getUserInfo", () => {
		const user = UserController.createUser(1,"nombre", "apellido", "correo@correo.mx","1234","mexico", "chihuahua");

		expect(UserController.getUserInfo(user)).toBeInstanceOf(Object);
	});
	test("3) Test addPoints and subtractPoints", () => {
		const user = UserController.createUser(1,"nombre", "apellido", "correo@correo.mx","1234","mexico", "chihuahua");
		UserController.addPoints(user, 123);
		expect(UserController.getPoints(user)).toBe(123);
		UserController.subtractPoints(user, 23);
		expect(UserController.getPoints(user)).toBe(100);
	});
});