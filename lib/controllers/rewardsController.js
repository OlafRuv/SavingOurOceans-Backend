const RewardsServices = require("../services/rewardsServices");
const Validators = require("./../utils/validators")

class RewardsController{

    static validateReward(reward){
        if(Validators.nullValidator(reward)) {
            return "Error null value";
        }
        else if(Validators.intValidator(reward.id) || Validators.stringValidator(reward.sponsor) || Validators.intValidator(reward.code) || Validators.intValidator(reward.pointsValue) || Validators.stringValidator(reward.name) || Validators.stringValidator(reward.type) || Validators.stringValidator(reward.deadLine)) {
            return "Error incorrect variable types"; 
        }
        else{
            return "All good";
        }
    }

	static createReward(reward){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

        const rewardResponse = RewardsServices.createRewards(reward.id,reward.sponsor,reward.code,reward.pointsValue,reward.name,reward.type,reward.deadLine)

        return rewardResponse;
	}

	static getInfoWOCode(reward){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }
        
        const rw = RewardsController.createReward(reward);
		const rewardsResponse = RewardsServices.getInfoWOCode(rw);
		return rewardsResponse;
	}  

	static getInfoWCode(reward){
		if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

        const rw = RewardsController.createReward(reward);
		const rewardsResponse = RewardsServices.getInfoWCode(rw);
		return rewardsResponse;
	}  

	static getCode(reward){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

		const rw = RewardsController.createReward(reward);
        const rewardsResponse = RewardsServices.getCode(rw);
		return rewardsResponse;
	}

	static getPoints(reward){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

        const rw = RewardsController.createReward(reward);
        const rewardsResponse = RewardsServices.getPoints(rw);
		return rewardsResponse;
	}
    
	static addPoints(reward, points){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

        const actualPoints = RewardsController.getPoints(reward);
        const newPoints = actualPoints + points;
        const rw = RewardsController.createReward(reward);
		const rewardsResponse = RewardsServices.updatePoints(rw,newPoints);
		return rewardsResponse;
	}

    static subPoints(reward, points){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }

        const actualPoints = RewardsController.getPoints(reward);
        const newPoints = actualPoints - points;
        const rw = RewardsController.createReward(reward);
		const rewardsResponse = RewardsServices.updatePoints(rw,newPoints);
		return rewardsResponse;
	}

	static updateDeadline(reward, deadLine){
        if (RewardsController.validateReward(reward) != "All good"){
            return RewardsController.validateReward(reward)
        }
        
        const rw = RewardsController.createReward(reward);
        const rewardsResponse = RewardsServices.updateDeadline(rw,deadLine)
        return rewardsResponse;
	}
}

module.exports = RewardsController;