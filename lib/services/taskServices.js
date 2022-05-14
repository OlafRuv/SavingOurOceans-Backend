const Task = require("./../models/task");

class TaskServices{
	static createTask(id, description, points, itsDone, itsAvailable){
		return new Task(id,description,points,itsDone, itsAvailable);
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
		return task.getItsAvailable;
	}
	static updateItsDone(task, isDone){
		task.setItsDone = isDone;
		return(task.getItsDone);
	}
	static getPoints(task){
		return task.getPoints;
	}
	static updatePoints(task, points){
		task.setPoints = points;
		return task.getPoints;
	}
}

module.exports = TaskServices;