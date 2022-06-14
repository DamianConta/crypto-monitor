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

JWTSECRETKEY = 'MI_clave_secreta'

```sh
npm ./bin/app.js
```

## Acerca de esta app

La aplicación provee un listado de criptomonedas disponibles ofrecidas por la api de CoinGecko https://www.coingecko.com/en/api
El usuario puede ingresar con su password y si es válido la aplicación devolverá un token para que pueda consumir los servicios ofrecidos por la aplicación. Cumpliendo con el estandar RFC7519 para la autenticación.

![cryptoMonitor](https://user-images.githubusercontent.com/105566014/173602331-8cd9aaf4-9cd4-4550-9aa8-5c04b1e98929.PNG)

Si el usuario no posee un password puede registrarse con el siguiente formulario.

![Register](https://user-images.githubusercontent.com/105566014/173605967-76ba16e3-0c73-4f75-b21c-3aec19d7d622.PNG)

Una vez registrado pasar al formulario de ingreso Login.

![formulario](https://user-images.githubusercontent.com/105566014/173603835-044e11f8-f035-4c87-a0b7-afc696e03174.PNG)

Una vez autenticado por la aplicación, el usuario puede listar todas las criptomonedas disponibles. El backend verificará el token de acceso y si es válido solicitará a CoinGecko por medio del metodo requerido el listado completo.




También puede guardar una o más criptomonedas en su Wallet con solo clickear la seleccionada.


## Author

👤 **Damián Contardi**

