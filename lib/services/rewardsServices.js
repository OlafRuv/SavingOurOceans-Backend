const Rewards = require("../models/rewards");

class RewardsServices{
	static createRewards(id,sponsor,code,pointsValue,name,type,deadLine){
		return new Rewards(id,sponsor,code,pointsValue,name,type,deadLine);
	}

	static getInfoWOCode(rewards){
		const rewardsInfo = {
            id: rewards.getId,
            sponsor: rewards.getSponsor,
            pointsValue: rewards.getPointsValue,
            name: rewards.getName,
            type: rewards.getType,
            deadLine: rewards.getDeadLine
		};
		return rewardsInfo;
	}  

	static getInfoWCode(rewards){
		const rewardsInfo = {
            id: rewards.getId,
            sponsor: rewards.getSponsor,
            code: rewards.getCode,
            pointsValue: rewards.getPointsValue,
            name: rewards.getName,
            type: rewards.getType,
            deadLine: rewards.getDeadLine
		};
		return rewardsInfo;
	}  

	static getCode(rewards){
		const rewardsInfo = {
            id: rewards.getId,
            code: rewards.getCode,
		};
		return rewardsInfo;
	}

	static getPoints(rewards){
		return rewards.getPointsValue;
	}
    
	static updatePoints(rewards, points){
		rewards.setPointsValue = points;
		return rewards.getPointsValue;
	}

	static updateDeadline(rewards, deadLine){
		rewards.setDeadLine = deadLine;
		return rewards.getDeadLine;
	}
}

module.exports = RewardsServices;