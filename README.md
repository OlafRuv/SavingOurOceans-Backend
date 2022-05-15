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

`npm install`

## Evolución Previsible
