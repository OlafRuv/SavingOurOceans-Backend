const Rewards = require("./../../../lib/models/rewards"); 

describe("Rewards model",() =>{
	test("1) Create reward", () => {
		const reward = new Rewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");

		expect(reward).not.toBeNull();
		expect(reward.id).toBe(1);
		expect(reward.sponsor).toBe("Coke");
		expect(reward.code).toBe(123456);
		expect(reward.pointsValue).toBe(30);
		expect(reward.name).toBe("Free Coke");
		expect(reward.type).toBe("Product");
		expect(reward.deadLine).toBe("Sat May 14 2028");
	});
    
	test("2) Test reward setters", () => {
		const reward = new Rewards(2,"Pepsi",789123,40,"Pepsi gratis","Producto","Sat May 14 2020");

		reward.setId = 1;
		reward.setSponsor = "Coke";
		reward.setCode = 123456;
		reward.setPointsValue = 30;
		reward.setName = "Free Coke";
		reward.setType = "Product";
		reward.setDeadLine = "Sat May 14 2028";

		expect(reward).not.toBeNull();
		expect(reward.id).toBe(1);
		expect(reward.sponsor).toBe("Coke");
		expect(reward.code).toBe(123456);
		expect(reward.pointsValue).toBe(30);
		expect(reward.name).toBe("Free Coke");
		expect(reward.type).toBe("Product");
		expect(reward.deadLine).toBe("Sat May 14 2028");
	});

	test("3) Test reward getters", () => {
		const reward = new Rewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");

		expect(reward).not.toBeNull();
		expect(reward.getId).toBe(1);
		expect(reward.getSponsor).toBe("Coke");
		expect(reward.getCode).toBe(123456);
		expect(reward.getPointsValue).toBe(30);
		expect(reward.getName).toBe("Free Coke");
		expect(reward.getType).toBe("Product");
		expect(reward.getDeadLine).toBe("Sat May 14 2028");
	});
});