const User = require("./../../../lib/models/user");
describe("Users",() =>{
	test("1) Create user", () => {
		const user = new User("nombre", "apellido", "correo@correo.mx","1234","mexico", "chihuahua");
    
		expect(user).not.toBeNull();
		expect(user.getName).toBe("nombre");
		expect(user.getLastname).toBe("apellido");
		expect(user.getEmail).toBe("correo@correo.mx");
		expect(user.getPassword).toBe("1234");
		expect(user.getPoints).toBe(0);
		expect(user.getCountry).toBe("mexico");
		expect(user.getState).toBe("chihuahua");
		expect(user.getCreationDate).not.toBeNull();

	});
	test("2) Test setters", () => {
		const user = new User( "nombre", "apellido", "correo@correo.mx","1234","mexico", "chihuahua");
		user.setEmail = "newCorreo@correo.mx";
		user.setPassword = "5678";
		user.setPoints = 456;
		user.setCountry = "japon";
		user.setState = "osaka";

		expect(user.getEmail).toBe("newCorreo@correo.mx");
		expect(user.getPassword).toBe("5678");
		expect(user.getPoints).toBe(456);
		expect(user.getCountry).toBe("japon");
		expect(user.getState).toBe("osaka");
	});
});