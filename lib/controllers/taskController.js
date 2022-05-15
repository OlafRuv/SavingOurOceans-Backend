const TaskServices = require("./../services/taskServices");
const Validators = require("./../utils/validators");

class TaskController{
    
	static validateReward(task){
		if(Validators.nullValidator(task)) {
			return "Error null value";
		}
		else if(Validators.intValidator(task.id) || Validators.stringValidator(task.description) || Validators.intValidator(task.points) || Validators.booleanValidator(task.itsDone) || Validators.booleanValidator(task.itsAvailable)) {
			return "Error incorrect variable types"; 
		}
		else{
			return "All good";
		}
	}

	static createTask(task){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const taskResponse = TaskServices.createTask(task.id,task.description,task.points,task.itsDone,task.itsAvailable);
		return taskResponse;
	}

	static getInfo(task){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const taskResponse = TaskServices.getInfo(tk);
		return taskResponse;
	}  

	static updateItsAvailable(task, isAvailable){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const taskResponse = TaskServices.updateItsAvailable(tk,isAvailable);
		return taskResponse;
	}

	static updateItsDone(task, isDone){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const taskResponse = TaskServices.updateItsDone(tk,isDone);
		return taskResponse;
	}

	static getPoints(task){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const taskResponse = TaskServices.getPoints(tk);
		return taskResponse;
		
	}

	static addPoints(task, points){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const newPts = TaskServices.getPoints(tk) + points;
		const taskResponse = TaskServices.updatePoints(tk,newPts);
		return taskResponse;
	}

	static subPoints(task, points){
		if (TaskController.validateReward(task) != "All good"){
			return TaskController.validateReward(task);
		}

		const tk = TaskController.createTask(task);
		const newPts = TaskServices.getPoints(tk) - points;
		if(newPts < 0){
			return "Error: cantidad de puntos negativa";
		}
		const taskResponse = TaskServices.updatePoints(tk,newPts);
		return taskResponse;
	}
}

module.exports = TaskController;