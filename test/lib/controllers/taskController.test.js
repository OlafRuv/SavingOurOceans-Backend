const TaskController = require("./../../../lib/controllers/taskController");
const taskObj = {
	id: 1,
	description: "description",
	points: 20,
	itsDone: false,
	itsAvailable: true,
};

describe("Task Controller",() =>{
	test("1) Create task", () => { 
		const task = TaskController.createTask(taskObj);

		expect(task).not.toBeNull();
		expect(task.id).toBe(1);
		expect(task.description).toBe("description");
		expect(task.points).toBe(20);
		expect(task.itsDone).toBe(false);
		expect(task.itsAvailable).toBe(true);
	});

	test("2) Get task Info", () => { 
		const task = TaskController.createTask(taskObj);
		const expected = {
			id: 1,
			description: "description",
			points: 20,
			itsDone: false,
			itsAvailable: true,
		};

		const taskInfo = TaskController.getInfo(task); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toMatchObject(expected);
	});

	test("3) Update Task isAvailable", () => { 
		const task = TaskController.createTask(taskObj);
		const expected = {
			id: 1,
			description: "description",
			points: 20,
			itsDone: false,
			itsAvailable: false,
		};

		const taskInfo = TaskController.updateItsAvailable(task,false); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toMatchObject(expected);
	});

	test("4) Update Task itsDone", () => { 
		const task = TaskController.createTask(taskObj);
		const expected = {
			id: 1,
			description: "description",
			points: 20,
			itsDone: true,
			itsAvailable: true,
		};

		const taskInfo = TaskController.updateItsDone(task,true); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toMatchObject(expected);
	});

	test("5) Task get Points", () => { 
		const task = TaskController.createTask(taskObj);
       
		const points = TaskController.getPoints(task); 
		expect(points).not.toBeNull();
		expect(points).toBe(20);
	});

	test("6) Add Points to Task", () => { 
		const task = TaskController.createTask(taskObj);
		const expected = {
			id: 1,
			description: "description",
			points: 30,
			itsDone: false,
			itsAvailable: true,
		};

		const taskInfo = TaskController.addPoints(task,10); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toMatchObject(expected);
	});

	test("6) Substract Points of Task", () => { 
		const task = TaskController.createTask(taskObj);
		const expected = {
			id: 1,
			description: "description",
			points: 10,
			itsDone: false,
			itsAvailable: true,
		};

		const taskInfo = TaskController.subPoints(task,10); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toMatchObject(expected);
	});

});