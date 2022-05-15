const UserServices = require("./../../../lib/services/userServices");

describe("Users",() =>{
	test("1) Create user", () => {
		const user = UserServices.createUser("nombre", "apellido", "correo@correo.mx","1234",0, "mexico", "chihuahua");
    
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
		const user = UserServices.createUser("nombre", "apellido", "correo@correo.mx","1234",0, "mexico", "chihuahua");

		expect(UserServices.getUserInfo(user)).toBeInstanceOf(Object);
	});
	test("3) Test addPoints and subtractPoints", () => {
		const user = UserServices.createUser("nombre", "apellido", "correo@correo.mx","1234",0, "mexico", "chihuahua");
		UserServices.addPoints(user, 123);
		expect(UserServices.getPoints(user)).toBe(123);
		UserServices.subtractPoints(user, 23);
		expect(UserServices.getPoints(user)).toBe(100);
		const text = UserServices.subtractPoints(user, 103);
		expect(text).toMatch("Error");
		expect(UserServices.getPoints(user)).toBe(100);
	});

});