<h1 align="center">Bienvenidos a crypto-monitor app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Instalación

Descargar todos los archivos y carpetas a una carpeta local. Luego ejecutar el siguiente comando para restaurar todas las dependencias.

```sh
npm i
```

## Uso

Crear el archivo .env y definir las siguientes variables de entorno. Reemplazar los valores.

MONGODB = 'Mi_URI_MONGO_DB

JWTSECRETKEY = 'Mi_clave_secreta'

```sh
npm ./bin/app.js
```

## Acerca de esta app
La aplicación provee un listado de criptomonedas disponibles ofrecidas por la api de CoinGecko https://www.coingecko.com/en/api.
El usuario puede ingresar con su password y si es válido la aplicación devolverá un token para que pueda consumir los servicios ofrecidos por la aplicación. Cumpliendo con el estandar RFC7519 para la autenticación. El Token expira en 1 día.

<ol>
  <li>El browser envía "user" y "password" al servidor.</li>
  <li>El servidor verifica el usuario y si es válido crea un JWT</li>
  <li>El servidor envía al browser la respuesta con el JWT</li>
  <li>El browser envía su solicitud junto con el JWT</li>
  <li>El servidor verifica el JWT</li>
  <li>El servidor envía al browser la respuesta con el JWT</li> 
</ol>

## Registro de Usuario
Si el usuario no posee un password puede registrarse con el siguiente formulario.

![Register](https://user-images.githubusercontent.com/105566014/173605967-76ba16e3-0c73-4f75-b21c-3aec19d7d622.PNG)

## Ingreso de Usuario
Una vez registrado, el usuario puede ingresar por medio del formulario de ingreso Login. Aquí se cumplen los tres primeros pasos de validación.

![formulario](https://user-images.githubusercontent.com/105566014/173603835-044e11f8-f035-4c87-a0b7-afc696e03174.PNG)

## Listado de "Coins"
Una vez autenticado por la aplicación, el usuario puede listar todas las criptomonedas disponibles. El backend verificará el token de acceso y si es válido solicitará a CoinGecko por medio del metodo requerido el listado completo. Cumpliendóse así los últimos tres pasos para cerrar el ciclo JWT.
También puede guardar una o más criptomonedas en su Wallet con solo clickear la seleccionada.

![Listado](https://user-images.githubusercontent.com/105566014/173605034-480ded01-a135-4539-a581-5514c89899f5.PNG)

## "My Wallet"
Haciendo click en "My Wallet" el usuario puede acceder a la base de datos para verificar las criptomonedas añadidas. El backend verifica el Token y si es válido devolverá el listado al usuario.

![Mywallet](https://user-images.githubusercontent.com/105566014/173605416-83117d90-56cd-4b69-97f8-d5804d02e66c.PNG)

## Author

👤 **Damián Contardi**

##¡Desde ya muchas gracias!

