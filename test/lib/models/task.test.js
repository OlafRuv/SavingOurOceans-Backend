const Task = require("./../../../lib/models/task"); 

describe("Task model",() =>{
	test("1) Create task", () => {
		const task = new Task(1,"Task Description",10,true);
		expect(task).not.toBeNull();
		expect(task.id).toBe(1);
		expect(task.description).toBe("Task Description");
		expect(task.points).toBe(10);
		expect(task.itsDone).toBe(true);

	});

	test("2) Test task setters", () => {
		const task = new Task(1,"Task Description",10,true);
		task.setId = 2;
		task.setDescription = "New One";
		task.setPoints = 20;
		task.setItsDone = false;

		expect(task).not.toBeNull();
		expect(task.id).toBe(2);
		expect(task.description).toBe("New One");
		expect(task.points).toBe(20);
		expect(task.itsDone).toBe(false);
	});

	test("3) Test task getters", () => {
		const task = new Task(1,"Task Description",10,true);
		expect(task).not.toBeNull();
		expect(task.getId).toBe(1);
		expect(task.getDescription).toBe("Task Description");
		expect(task.getPoints).toBe(10);
		expect(task.getItsDone).toBe(true);

	});
});