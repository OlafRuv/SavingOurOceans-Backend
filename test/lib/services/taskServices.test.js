const TaskServices = require("./../../../lib/services/taskServices"); 

describe("Task model",() =>{
	test("1) Create task", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true);
		expect(task).not.toBeNull();
		expect(task.id).toBe(1);
		expect(task.description).toBe("Task Description");
		expect(task.points).toBe(10);
		expect(task.itsDone).toBe(true);
    
	});
  
	test("2) Test getInfo", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true);
		const taskInfo = TaskServices.getInfo(task); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toBeInstanceOf(Object);
		expect(taskInfo.id).toBe(1);
	});
  
	test("3) Test updateItsDone", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true);
    
		expect(TaskServices.updateItsDone(task, false)).toBe(false);
	});
	test("4) Test updatePoints", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true);
		TaskServices.updatePoints(task, 32);
		expect(TaskServices.getPoints(task)).toBe(32);
	});
});