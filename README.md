
# Caiman Inc. - Sistema de Inventario de Bodega

Este proyecto es un sistema de **inicio de sesión** para el inventario de la bodega de **Caiman Inc.**. Está construido utilizando **React**, **TailwindCSS** para el diseño, **Firebase** para la autenticación, **React Toastify** para notificaciones, y **React Router DOM** para la navegación.

## Características

- **Formulario de login** estilizado con **TailwindCSS**.
- **Autenticación de usuarios** utilizando **Firebase Authentication**.
- **Navegación** gestionada con **React Router DOM**.
- **Notificaciones con React Toastify**: Notifica al usuario sobre el éxito o los errores durante el inicio de sesión.
- **Animación de fondo** para un diseño moderno y limpio.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js** v14 o superior.
- **npm** (viene con Node.js) o **bun** (un administrador de paquetes alternativo).
- Una cuenta de **Firebase**. Puedes configurar un proyecto en [Firebase Console](https://console.firebase.google.com/).

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto de la bodega en tu máquina local.

### 1. Clonar el repositorio

Primero, clona el repositorio desde GitHub:

\`\`\`bash
git clone https://github.com/tu-usuario/caiman-inc-bodega.git
cd caiman-inc-bodega
\`\`\`

### 2. Instalar las dependencias

#### Usando **npm**:

\`\`\`bash
npm install
\`\`\`

#### O usando **bun**:

Si prefieres usar **bun** como gestor de paquetes, instala las dependencias con:

\`\`\`bash
bun install
\`\`\`

### 3. Configurar Firebase

1. Ve a la [Consola de Firebase](https://console.firebase.google.com/) y crea un nuevo proyecto para **Caiman Inc.**.
2. Habilita el método de **autenticación por correo electrónico y contraseña** en la sección de Authentication.
3. En el menú de configuraciones del proyecto, agrega una nueva aplicación web y copia las credenciales de configuración.

### 4. Configurar Firebase en el proyecto

Crea un archivo \`src/firebase.js\` y añade la configuración de Firebase con las credenciales que obtuviste de Firebase. Reemplaza los valores por los tuyos:

\`\`\`javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
\`\`\`

### 5. Configurar TailwindCSS

TailwindCSS ya está configurado en el proyecto. Si necesitas hacer modificaciones o agregar más utilidades de Tailwind, puedes editar el archivo \`tailwind.config.js\`.

Asegúrate de que el archivo \`src/index.css\` contenga las directivas necesarias de Tailwind:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### 6. Ejecutar el proyecto

Una vez que todas las configuraciones estén completas, puedes ejecutar el proyecto en modo de desarrollo:

#### Usando **npm**:

\`\`\`bash
npm start
\`\`\`

#### Usando **bun**:

\`\`\`bash
bun run start
\`\`\`

Esto abrirá el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).

## Uso

### Iniciar sesión

1. En la página principal (ruta \`/\`), ingresa tu correo electrónico y contraseña, que deben estar registrados en Firebase.
2. Si las credenciales son correctas, serás redirigido al **Dashboard**. Si no lo son, recibirás un mensaje de error gracias a las notificaciones de **Toastify**.

### Notificaciones con Toastify

Este proyecto utiliza **React Toastify** para mostrar notificaciones al usuario. Por ejemplo:
- Si el inicio de sesión es exitoso, se mostrará una notificación de éxito.
- Si hay un error (por ejemplo, credenciales incorrectas), se mostrará una notificación de error.

Las notificaciones aparecen automáticamente y desaparecen después de unos segundos, proporcionando una experiencia de usuario más fluida.

### Añadir usuarios

Puedes agregar nuevos usuarios directamente desde la consola de **Firebase Authentication**, en la sección "Users", o puedes implementar un formulario de registro si lo necesitas.

## Estructura del Proyecto

El proyecto sigue una estructura organizada y modular para facilitar su mantenimiento:

- \`src/\`
  - \`components/\`: Contiene los componentes de la aplicación (Formulario de login, Dashboard, etc).
  - \`services/\`: Servicio de autenticación para manejar el login.
  - \`firebase.js\`: Archivo de configuración para conectar el proyecto con Firebase.
  - \`App.js\`: Componente principal que maneja las rutas con **React Router DOM**.
  
## Dependencias Principales

Estas son las principales tecnologías y librerías utilizadas en este proyecto:

- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **TailwindCSS**: Framework de CSS para el diseño responsivo y moderno.
- **Firebase**: Usado para la autenticación de usuarios y gestión de datos.
- **React Router DOM**: Gestión de rutas en la aplicación.
- **React Toastify**: Librería para mostrar notificaciones de éxito y error.

## Futuras Mejoras

Estas son algunas características que podrías añadir para mejorar el proyecto:

- **Registro de Usuarios**: Implementar un formulario de registro para permitir que los usuarios se registren en el sistema.
- **Restablecimiento de Contraseña**: Agregar la funcionalidad para que los usuarios puedan recuperar su contraseña mediante Firebase.
- **Protección de Rutas**: Asegurarse de que solo los usuarios autenticados puedan acceder a ciertas páginas, como el Dashboard.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork, agregar tus cambios, y abrir un pull request con tus mejoras. ¡Las contribuciones son siempre bienvenidas!

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.