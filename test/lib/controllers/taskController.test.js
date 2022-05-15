const TaskController = require("./../../../lib/controllers/taskController");
const taskObj = {
	id: 1,
    description: "description",
    points: 20,
    itsDone: false,
    itsAvailable: true,
}

describe("Task Controller",() =>{
	test("1) Create task", () => { 
		const task = TaskController.createTask(taskObj);
        console.log(task);
		expect(task).not.toBeNull();
		expect(task.id).toBe(1);
		expect(task.description).toBe("description");
		expect(task.points).toBe(20);
		// expect(task.itsDone).toBe(false);
		expect(task.itsAvailable).toBe(true);
	});
});