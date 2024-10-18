# API de Empleados para Employee Manager

## Descripción
Esta es la API de backend para la aplicación de React **Employee Manager**. Proporciona una funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) completa para gestionar empleados. La API está construida utilizando Node.js y Express.js, y utiliza MongoDB como base de datos.

## Inicio

Para comenzar, debes crear un archivo `.env` con las siguientes variables:

```
MONGO_URI
PORT
```
Puedes utilizar el archivo `.env.example` como referencia.

### Poblar la base de datos
Para poblar la base de datos con algunos datos iniciales, puedes ejecutar el siguiente script:

`npm run populate`

Este script creará un conjunto de empleados de ejemplo en la base de datos.

## Puntos de acceso de la API

La API tiene los siguientes puntos de acceso:

- **GET /empleados**  
  Recupera una lista de todos los empleados.

- **GET /empleados/:id**  
  Recupera un empleado individual por ID.

- **POST /empleados**  
  Crea un nuevo empleado.

- **PUT /empleados/:id**  
  Actualiza un empleado existente.

- **DELETE /empleados/:id**  
  Elimina un empleado.

## Manejo de errores

La API incluye manejo de errores para las siguientes situaciones:

- **Errores de validación**: Si el cuerpo de la solicitud es inválido, la API devolverá un error 400 con un mensaje de error detallado.
- **Errores de base de datos**: Si ocurre un error al conectarse a la base de datos o al realizar una operación, la API devolverá un error 500 con un mensaje de error genérico.
- **Errores de no encontrado**: Si un empleado no se encuentra, la API devolverá un error 404 con un mensaje de error detallado.

## Seguridad

La API utiliza variables de entorno para almacenar información sensible, como la URI de MongoDB. Asegúrate de mantener tu archivo `.env` seguro y no lo incluyas en el control de versiones.

## Dependencias

La API utiliza las siguientes dependencias:

- **express**: Para construir la API
- **mongodb**: Para interactuar con la base de datos MongoDB
- **dotenv**: Para cargar las variables de entorno desde el archivo `.env`
- **cors**: Para habilitar CORS
- **morgan**: Para registrar las solicitudes HTTP

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Reconocimientos

Este proyecto fue construido utilizando los siguientes recursos:

- [Documentación de MongoDB](https://www.mongodb.com/docs/)
- [Documentación de Express.js](https://expressjs.com/)
- [Documentación de Dotenv](https://www.npmjs.com/package/dotenv)


