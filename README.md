# SavingOurOceans-Backend

## Dependencias

| Herramientas | Version |
| ------------ | ------- |
| Node         |         |
| Jest         |         |
| Express      |         |
|              |         |
| Eslint       |         |

## Diseño de Solución

## Implementación

### Modelos

### Controladores y Servicios

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
