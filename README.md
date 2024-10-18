# Employee Manager

## Descripción
**Employee Manager** es una aplicación web completa diseñada para gestionar información de empleados. La aplicación se compone de dos partes principales: un frontend desarrollado en **React** y un backend construido con **Node.js** y **Express**. La API del backend proporciona funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) y está conectada a una base de datos (MongoDB). El frontend consume esta API para mostrar la información de los empleados de manera organizada y fácil de usar.

## Estructura de la Aplicación

### Frontend
- **Tecnologías**: React, Vite, Tailwind CSS.
- **Funcionalidades**:
  - Consume la API del backend para obtener la lista de empleados.
  - Organiza a los empleados por área en la interfaz de usuario.
  - Muestra la cantidad total de empleados por cada área.
  - Permite al usuario hacer clic en un empleado para ver su información detallada.

### Backend
- **Tecnologías**: Node.js, Express.js, MongoDB.
- **Funcionalidades**:
  - Exponer un endpoint para obtener un listado de todos los empleados.
  - Gestionar información de empleados con los siguientes atributos: nombre completo, edad, área, antigüedad y teléfono.
  - Implementar manejo de errores para validaciones y operaciones de base de datos.

## Requisitos

### Backend
- Node.js 14 o superior
- npm 6 o superior
- MongoDB

### Frontend
- Node.js 14 o superior
- npm 6 o superior
- React 17 o superior
- Tailwind CSS 2 o superior
- Vite 2 o superior

## Instalación

### Backend

1. Clona el repositorio:
   
   git clone `https://github.com/AlexGR22/EmployeeManager.git` (backend)

2. Crea un archivo `.env` con las siguientes variables:

MONGO_URI 
PORT


Utiliza el archivo `.env.example` como referencia.

3. Instala las dependencias:

npm install

4. (Opcional) Para poblar la base de datos con algunos datos iniciales, ejecuta el siguiente script:

npm run populate

5. Inicia el servidor:

npm start

La API estará disponible en `http://localhost:<PORT>`.

### Frontend

1. Clona el repositorio:

git clone `https://github.com/AlexGR22/EmployeeManager.git` (frontend)

2. Completa las variables de entorno en el archivo `.env`, basándote en el ejemplo proporcionado en `.env.example`.

3. Instala las dependencias:

npm install

4. Inicia la aplicación:

npm run dev

La aplicación estará disponible en `http://localhost:5173`.

## Puntos de acceso de la API

- **GET /employees**: Recupera una lista de todos los employees.
- **GET /employees/:id**: Recupera un empleado individual por ID.
- **POST /employees**: Crea un nuevo empleado.
- **PUT /employees/:id**: Actualiza un empleado existente.
- **DELETE /employees/:id**: Elimina un empleado.

## Manejo de errores

La API incluye manejo de errores para situaciones como validaciones, errores de base de datos y recursos no encontrados.

## Dependencias

### Backend
- **express**: Para construir la API
- **mongodb**: Para interactuar con la base de datos
- **dotenv**: Para cargar las variables de entorno
- **cors**: Para habilitar CORS
- **morgan**: Para registrar las solicitudes HTTP

### Frontend
- **react-router-dom**: Para manejar las rutas de la aplicación.
- **tailwindcss**: Para estilar los componentes.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Reconocimientos

Este proyecto fue desarrollado utilizando los siguientes recursos:

- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Vite](https://vitejs.dev/guide/)
- [Documentación de MongoDB](https://www.mongodb.com/docs/)
- [Documentación de Express.js](https://expressjs.com/)
- [Documentación de Dotenv](https://www.npmjs.com/package/dotenv)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
