const Rewards = require("../models/rewards");

class RewardsServices{
	static createRewards(id,sponsor,code,pointsValue,name,type,deadLine){
		return new Rewards(id,sponsor,code,pointsValue,name,type,deadLine);
	}

	static getInfoWOCode(reward){
		const rewardsInfo = {
			id: reward.getId,
			sponsor: reward.getSponsor,
			pointsValue: reward.getPointsValue,
			name: reward.getName,
			type: reward.getType,
			deadLine: reward.getDeadLine
		};
		return rewardsInfo;
	}  

	static getInfoWCode(reward){
		const rewardsInfo = {
			id: reward.getId,
			sponsor: reward.getSponsor,
			code: reward.getCode,
			pointsValue: reward.getPointsValue,
			name: reward.getName,
			type: reward.getType,
			deadLine: reward.getDeadLine
		};
		return rewardsInfo;
	}  

	static getCode(reward){
		const rewardsInfo = {
			id: reward.getId,
			code: reward.getCode,
		};
		return rewardsInfo;
	}

	static getPoints(reward){
		return reward.getPointsValue;
	}
    
	static updatePoints(reward, points){
		reward.setPointsValue = points;
		return reward;
	}

	static updateDeadline(reward, deadLine){
		reward.setDeadLine = deadLine;
		return reward;
	}
}

module.exports = RewardsServices;