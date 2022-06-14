<h1 align="center">Bienvenidos a crypto-monitor app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Install

Descargar todos los archivos y carpetas a una carpeta local. Luego ejecutar el siguiente comando para restaurar todas las dependencias.

```sh
npm i
```

## Usage

Crear el archivo .env y definir las siguientes variables de entorno. Reemplazar los valores.

MONGODB = 'Mi_URI_MONGO_DB

JWTSECRETKEY = 'MI_clave_secreta'

```sh
npm run start
```

## Acerca de esta app

La aplicación provee un listado de criptomonedas disponibles ofrecidas por la api de CoinGecko https://www.coingecko.com/en/api
El usuario puede ingresar con su password y si es válido la aplicación devolverá un token para que pueda consumir los servicios ofrecidos por la aplicación. Cumpliendo con el estandar RFC7519 para la autenticación.


Si el usuario no posee un password puede registrarse con el siguiente formulario.


Una vez autenticado por la aplicación, el usuario puede listar todas las criptomonedas disponibles.


También puede guardar una o más criptomonedas en su Wallet con solo clickear la seleccionada.


## Author

👤 **Damián Contardi**

