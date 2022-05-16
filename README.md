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

### Utilidades
Se crea una clase `Validators` que servirá para la validación de los diversos tipos de datos
a utilizar. Sus funciones simplemente regresarán un booleano.

``mermaid
classDiagram
  class Validators{
    +bool nullValidator(var)
    +bool intValidator(var)
    +bool stringValidator(var)
    +bool listOfStringsValidator(var)
    +bool booleanValidator(var)
  }
``
Nuestro sistema debía de almacenar datos por lo cual montamos una Base de Datos de PostgreSQL 🐘 para el almacenamiento de los mismos, por cuestiones de optimización de tiempo usamos Prisma para crear la base de datos a partir de modelos de datos de Prisma y de Semillas o Seeds para la inserción de información de prueba.

Por último para el acceso a la aplicación de Backend que desarrollamos, decidimos montar la API y la BD en la infraestructura de **Azure** puesto que es altamente escalable, mantenible y accesible 💙

## Implementación 🦈

### Modelos 🐠

Creamos modelos de datos para las siguientes clases

![](image/README/1652657591495.png)

Cada una de ellas haciendo uso del paradigma de programación **POO**

* Ejemplo class Rewards


### Controladores y Servicios 🐙

Para los modelos de datos creados desarrollamos sus Controladores y Servicios

* Ejemplo class Tasks

### Utilidades 🦑

Hicimos uso de validadores de datos los cuales eran accesados por los controladores, estos validadores se dedican a evaluar la información entrante y saliente de la BD

### Pruebas
Para validar nuestro código, creamos pruebas unitarias que corrobora que las funciones 
hagan lo que se espera. Para esto utilizamos la dependencia `jest`. Las pruebas unitarias se
crearon para:

| Models | Services | Controllers |
| ----------- | -------- | ----------- |
| UserControllers.js | UserServices.js | User.js |
| TaskControllers.js | TaskServices.js | Task.js  |
| RewardControllers.js | RewardServices.js | Reward.js |

A continuación veremos un ejemplo del código para las pruebas

```js
const TaskServices = require("./../../../lib/services/taskServices"); 

describe("Task model",() =>{
	test("1) Create task", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true,true);
		expect(task).not.toBeNull();
		expect(task.id).toBe(1);
		expect(task.description).toBe("Task Description");
		expect(task.points).toBe(10);
		expect(task.itsDone).toBe(true);
		expect(task.itsAvailable).toBe(true);
	});
  
	test("2) Test getInfo", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true);
		const taskInfo = TaskServices.getInfo(task); 
		expect(taskInfo).not.toBeNull();
		expect(taskInfo).toBeInstanceOf(Object);
		expect(taskInfo.id).toBe(1);
	});
  
	test("3) Test updateItsDone", () => {
		const task = TaskServices.createTask(1,"Task Description",10,true,true);
		const t = TaskServices.updateItsDone(task, false);
		expect(t.itsDone).toBe(false);
	});
})
```
Para correr las pruebas, utilice el siguiente comando desde la terminal.

```bash
> npm test
```

### Automatización de Pruebas
Para la automatización de pruebas, utilizamos *Github actions* para facilitar el proceso de verificación de errores, y evitar que esos errores se lleguen a subir al servidor, ocasionando problemas más graves.

El código utilizado para automatizarlo es el siguiente: 
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

Para ver la documentación de la API y sus *endpoints*, darle click [aquí](https://documenter.getpostman.com/view/20636313/UyxjFm6q).


### Base de Datos 

Para la creación de la base de datos, utilizamos *postgreSQL*, y para facilitar la escritura de código, se utilizó la dependencia de prisma, el cual permite agilizar la escritura de SQL.

En el archivo de `prisma/schema.prisma`, se desarrollan los modelos que estarán en la base de datos, y en dado caso de modificar o agregar un nuevo modelo/tabla, se debe de correr el siguiente comando.
```bash
> npx prisma migrate dev --name init
```
De igual manera podemos encontrar el archivo `prisma/seed.js`, el cual permite general datos para llenar nuestras tablas con cierta información inicial.

### Deployment de Aplicación

`npm install`

## Evolución Previsible
