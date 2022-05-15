const RewardsServices = require("./../../../lib/services/rewardsServices"); 

describe("Rewards Services model",() =>{
	test("1) Create reward", () => {
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		console.log(reward);
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
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const rewardInfoWOCode = RewardsServices.getInfoWOCode(reward); 
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
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const rewardInfoWCode = RewardsServices.getInfoWCode(reward);
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
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const rewardCode = RewardsServices.getCode(reward); 
		const expected = {
			id: 1,
			code: 123456,
		};

		expect(rewardCode).not.toBeNull();
		expect(rewardCode).toMatchObject(expected);
	});

	test("5) Test getPoints", () => {
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const rewardPts = RewardsServices.getPoints(reward); 

		expect(rewardPts).not.toBeNull();
		expect(rewardPts).toBe(30);
	});

	test("6) Test updatePoints", () => {
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const newPts = RewardsServices.updatePoints(reward,100); 

		expect(newPts).not.toBeNull();
		expect(newPts.pointsValue).toBe(100);
	});

	test("6) Test updateDeadline", () => {
		const reward = RewardsServices.createRewards(1,"Coke",123456,30,"Free Coke","Product","Sat May 14 2028");
		const newDate = RewardsServices.updateDeadline(reward,"tomorrow bro"); 

		expect(newDate).not.toBeNull();
		expect(newDate.deadLine).toBe("tomorrow bro");
	});

});