const RewardsController = require("./../../../lib/controllers/rewardsController");
const rewardObj = {
	id : 1,
	sponsor : "Coke",
	code : 123456,
	pointsValue : 30,
	name : "Free Coke",
	type : "Product",
	deadLine : "Sat May 14 2028"
};


describe("Rewards Controller",() =>{
	test("1) Create reward", () => { 
		const reward = RewardsController.createReward(rewardObj);

		expect(reward).not.toBeNull();
		expect(reward.id).toBe(1);
		expect(reward.sponsor).toBe("Coke");
		expect(reward.code).toBe(123456);
		expect(reward.pointsValue).toBe(30);
		expect(reward.name).toBe("Free Coke");
		expect(reward.type).toBe("Product");
		expect(reward.deadLine).toBe("Sat May 14 2028");
	});

	test("2) Test getInfoWOCode", () => {
		const rewardInfoWOCode = RewardsController.getInfoWOCode(rewardObj); 
		const expected = {
			id: 1,
			sponsor: "Coke",
			pointsValue: 30,
			name: "Free Coke",
			type: "Product",
			deadLine: "Sat May 14 2028"
		};
        
		expect(rewardInfoWOCode).not.toBeNull();
		expect(rewardInfoWOCode).toMatchObject(expected);
	});

	test("3) Test getInfoWCode", () => {
		const rewardInfoWCode = RewardsController.getInfoWCode(rewardObj);
		const expected = {
			id: 1,
			sponsor: "Coke",
			code: 123456,
			pointsValue: 30,
			name: "Free Coke",
			type: "Product",
			deadLine: "Sat May 14 2028"
		};
		expect(rewardInfoWCode).not.toBeNull();
		expect(rewardInfoWCode).toMatchObject(expected);
	});
  
	test("4) Test getCode", () => {
		const rewardCode = RewardsController.getCode(rewardObj); 
		const expected = {
			id: 1,
			code: 123456,
		};

		expect(rewardCode).not.toBeNull();
		expect(rewardCode).toMatchObject(expected);
	});

	test("5) Test getPoints", () => {
		const rewardPts = RewardsController.getPoints(rewardObj); 

		expect(rewardPts).not.toBeNull();
		expect(rewardPts).toBe(30);
	});

	test("6) Test addPoints", () => {
		const rewardPts = RewardsController.addPoints(rewardObj,20); 

		expect(rewardPts).not.toBeNull();
		expect(rewardPts.pointsValue).toBe(50);
	});

	test("7) Test subPoints", () => {
		const rewardPts = RewardsController.subPoints(rewardObj,10); 

		expect(rewardPts).not.toBeNull();
		expect(rewardPts.pointsValue).toBe(20);
	});

	test("8) Test updateDeadline", () => {
		
		const newDate = RewardsController.updateDeadline(rewardObj,"tomorrow bro"); 

		expect(newDate).not.toBeNull();
		expect(newDate.deadLine).toBe("tomorrow bro");
	});
});