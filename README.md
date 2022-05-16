# SavingOurOceans-Backend 🐳

## Herramientas 🐋

| Herramientas |                   Version                   |
| :----------: | :------------------------------------------: |
|     Node     |                   v16.14.0                   |
|     Npm     | v8.3.1 (It comes with the Node installation) |
|     Jest     |                 v26.0.04.18.                 |
|   Express   |                   v4.18.1                   |
|    Prisma    |                   v3.14.0                   |
|    Eslint    |                   v8.15.0                   |
|  PostgreSQL  |                    v14.3                    |
|   Postman   |                    🐱‍🏍                    |
|     Git     |              v2.35.1.windows.2              |
|    Github    |                    🐱‍💻                    |

## Diseño de Solución 🐟

Para nuestra aplicacion decidimos separar el desarrollo del Frontend del Backend. 🐱‍🐉

Para el desarrollo del **Backend** hicimos la abstracción del sitema en *Modelos de Datos*, *Servicios* para crear datos en base a los modelos y sus respectivos *Controladores,* los cuales se encargan de la comunicación entre el API, la *Base de Datos* de Postgresql y los Servicios para creación de datos, además desarrollamos una serie de *Validadores* de datos para eliminar el problema de inconsistencia de datos y de registro de información erronea en la BD. 😉

Para garantizar Calidad 😎 en el desarrollo del backend usamos el modelo de desarrollo **TDD** *Desarrollo Dirigido por* *Pruebas* por sus siglas en ingles Test Driven Development, todas las pruebas se desarrollaron haciendo uso de jest y se validaron modulos, controladores y servicios.

Nuestro sistema debía de almacenar datos por lo cual montamos una Base de Datos de PostgreSQL 🐘 para el almacenamiento de los mismos, por cuestiones de optimización de tiempo usamos Prisma para crear la base de datos a partir de modelos de datos de Prisma y de Semillas o Seeds para la inserción de información de prueba.

Por último para el acceso a la aplicación de Backend que desarrollamos, decidimos montar la API y la BD en la infraestructura de **Azure** puesto que es altamente escalable, mantenible y accesible 💙

## Implementación 🦈

### Modelos 🐠

Creamos modelos de datos para las siguientes clases

![](image/README/1652657591495.png)

Cada una de ellas haciendo uso del paradigma de programación **POO**

* Ejemplo ``class Rewards``

```js
class Rewards{
	constructor(id,sponsor,code,pointsValue,name,type,deadLine){
		this.id = id;
		this.sponsor = sponsor;
		this.code = code;
		this.pointsValue = pointsValue;
		this.name = name;
		this.type = type;
		this.deadLine = deadLine;
	}

	get getId(){
		return this.id;
	}
	get getSponsor(){
		return this.sponsor;
	}
	get getCode(){
		return this.code;
	}
	get getPointsValue(){
		return this.pointsValue;
	}
	get getName(){
		return this.name;
	}
	get getType(){
		return this.type;
	}
	get getDeadLine(){
		return this.deadLine;
	}

	set setId(id){
		this.id = id;
	}
	set setSponsor(sponsor){
		this.sponsor = sponsor;
	}
	set setCode(code){
		this.code = code;
	}
	set setPointsValue(pointsValue){
		this.pointsValue = pointsValue;
	}
	set setName(name){
		this.name = name;
	}
	set setType(type){
		this.type = type;
	}
	set setDeadLine(deadLine){
		this.deadLine = deadLine;
	}
}

module.exports = Rewards;
```


### Controladores y Servicios 🐙

Para los modelos de datos creados desarrollamos sus Controladores y Servicios

* Ejemplo ``class Tasks`` Servicio

```js
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
		};
		return taskInfo;
	}  

	static updateItsAvailable(task, isAvailable){
		task.setItsAvailable = isAvailable;
		return task;
	}

	static updateItsDone(task, isDone){
		task.setItsDone = isDone;
		return task;
	}

	static getPoints(task){
		return task.getPoints;
	}

	static updatePoints(task, points){
		task.setPoints = points;
		return task;
	}
}

module.exports = TaskServices;
```

* Ejemplo ``class Tasks`` Controlador
```js
const TaskServices = require("./../services/taskServices");
const Validators = require("./../utils/validators");

class TaskController{
    
	static validateReward(task){
		if(Validators.nullValidator(task)) {
			return "Error null value";
		}
		else if(Validators.stringValidator(task.description) || Validators.intValidator(task.points) || Validators.booleanValidator(task.itsDone) || Validators.booleanValidator(task.itsAvailable)) {
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
```

### Utilidades 🦑

Se crea una clase `Validators` que servirá para la validación de los diversos tipos de datos
a utilizar. Sus funciones simplemente regresarán un booleano.

```mermaid
classDiagram
  class Validators{
    +bool nullValidator(var)
    +bool intValidator(var)
    +bool stringValidator(var)
    +bool listOfStringsValidator(var)
    +bool booleanValidator(var)
  }
```
### Pruebas
Para validar nuestro código, creamos pruebas unitarias que corrobora que las funciones 
hagan lo que se espera. Para esto utilizamos la dependencia `jest`. Las pruebas unitarias se
crearon para:

| Models | Services | Controllers |
| ----------- | -------- | ----------- |
| UserControllers.js | UserServices.js | User.js |
| TaskControllers.js | TaskServices.js | Task.js  |
| RewardControllers.js | RewardServices.js | Reward.js |


### Automatización de Pruebas
Para la automatización de pruebas, utilizamos *Github actions* para facilitar el proceso de 
```yaml
name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install modules
      run: yarn
    - name: Run tests
      run: yarn test

```

### API
La página web necesita de un servicio API que es el que se encargará de enlazar el frontend con el backend. Para eso nosotros utilizamos la dependencia de *Express* para la utilización de los métodos HTTP, y para conectar los servers, *cors*.

Para ver la documentación de la API y sus *endpoints*, darle click aquí.

https://documenter.getpostman.com/view/20636313/UyxjFm6q

<!-- | HTTP Method | Endpoint | Description |
| ----------- | -------- | ----------- |
| POST | /createUser | Crea un usuario |
| POST | /user | Obtiene un usuario |
| P |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  | -->

### Base de Datos 

Prisma y Postgres

### Deployment de Aplicación

Para el deployment de la aplicación hicimos uso de Azure 💙, en donde creamos un grupo de recursos llamado Save Our Ocean, además creamos un servidor de PostgreSql para montar la base de datos y creamos un App Service para montar la API

![image](https://user-images.githubusercontent.com/62526919/168500347-ad5594ce-d801-49d5-a08e-38675a28678e.png)
![image](https://user-images.githubusercontent.com/62526919/168500476-117e75b8-6f34-4abf-a29e-b799b2f5584b.png)

La mayoría de consultas de información son por el método POST por lo cual se puede apreciar el funcionamiento en la sección de API
![image](https://user-images.githubusercontent.com/62526919/168500507-1ee3baf6-cd5c-41ef-b9f6-33be6ec2d72b.png)


## Evolución Previsible
