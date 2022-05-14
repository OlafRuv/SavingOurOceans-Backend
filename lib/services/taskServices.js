const Task = require("./../models/task");

class TaskServices{
  static createTask(id, description, points, itsDone){
    return new Task(id,description,points,itsDone);
  }
  static getInfo(task){
    const taskInfo = {
      id: task.getId,
      description: task.getDescription,
      points: task.getPoints,
      itsDone: task.getItsDone,
      date: task.getDate
    }
    return taskInfo;
  }  

}

module.exports = TaskServices;