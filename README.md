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

* Ejemplo class Rewards


### Controladores y Servicios 🐙

Para los modelos de datos creados desarrollamos sus Controladores y Servicios

* Ejemplo class Tasks

### Utilidades 🦑

Hicimos uso de validadores de datos los cuales eran accesados por los controladores, estos validadores se dedican a evaluar la información entrante y saliente de la BD

### Pruebas

### Automatización de Pruebas

### API

| HTTP Method | Endpoint | Description |
| ----------- | -------- | ----------- |
|             |          |             |
|             |          |             |

### Base de Datos 

Prisma y Postgres

### Deployment de Aplicación

`npm install`

## Evolución Previsible
