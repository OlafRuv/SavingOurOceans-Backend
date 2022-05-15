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

		const taskResponse = TaskServices.createTask(task.id,task.description,task.points,task.itsAvailable);
		return taskResponse;
	}

	static getInfo(task){
		const taskInfo = {
			id: task.getId,
			description: task.getDescription,
			points: task.getPoints,
			itsDone: task.getItsDone,
			itsAvailable: task.getItsAvailable,
			date: task.getDate
		};
		return taskInfo;
	}  
	static updateItsAvailable(task, isAvailable){
		task.setItsAvailable = isAvailable;
		return task;
	}
	static updateItsDone(task, isDone){
		task.setItsDone = isDone;
		return(task);
	}
	static getPoints(task){
		return task.getPoints;
	}
	static updatePoints(task, points){
		task.setPoints = points;
		return task;
	}
}

module.exports = TaskController;