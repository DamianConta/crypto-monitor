<h1 align="center">Bienvenidos a crypto-monitor app 馃憢</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Instalaci贸n

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
## Deploy

La aplicaci贸n se encuentra desplegada en https://coins-monitor.herokuapp.com/

## Acerca de esta app
La aplicaci贸n provee un listado de criptomonedas disponibles ofrecidas por la api de CoinGecko https://www.coingecko.com/en/api.
El usuario puede ingresar con su password y si es v谩lido la aplicaci贸n devolver谩 un token para que pueda consumir los servicios ofrecidos por la aplicaci贸n. Cumpliendo con el estandar RFC7519 para la autenticaci贸n. El Token expira en 1 d铆a.

<ol>
  <li>El browser env铆a "user" y "password" al servidor.</li>
  <li>El servidor verifica el usuario y si es v谩lido crea un JWT</li>
  <li>El servidor env铆a al browser la respuesta con el JWT</li>
  <li>El browser env铆a su solicitud junto con el JWT</li>
  <li>El servidor verifica el JWT</li>
  <li>El servidor env铆a al browser la respuesta con el JWT</li> 
</ol>

## Barra de navegaci贸n

![Nav](https://user-images.githubusercontent.com/105566014/173739796-3041d002-19ae-4db2-86ad-5807192b27bc.PNG)

## Registro de Usuario
Si el usuario no posee un password puede registrarse con el siguiente formulario.

![Register](https://user-images.githubusercontent.com/105566014/173739831-f0710991-305c-4125-aef8-179e2cb07a04.PNG)

## Ingreso de Usuario
Una vez registrado, el usuario puede ingresar por medio del formulario de ingreso Login. Aqu铆 se cumplen los tres primeros pasos de validaci贸n.

![Login](https://user-images.githubusercontent.com/105566014/173739807-833e232a-d25a-4226-8671-570751e41c3b.PNG)

Despu茅s de validarse el ingreso ver谩 el siguiente aviso.

![Bienvenido](https://user-images.githubusercontent.com/105566014/173739844-6894d23c-2cb3-41ae-8f48-8be0e9661c95.PNG)

## Listado de "Coins"
Una vez autenticado por la aplicaci贸n, el usuario puede listar todas las criptomonedas disponibles. El backend verificar谩 el token de acceso, si es v谩lido solicitar谩 a CoinGecko por medio del m茅todo requerido el listado completo. Cumpliend贸se as铆 los 煤ltimos tres pasos para cerrar el ciclo JWT.
Tambi茅n puede guardar una o m谩s criptomonedas en su Wallet con solo clickear la seleccionada.

![CoinList](https://user-images.githubusercontent.com/105566014/173739858-cbe1b511-753c-4beb-af8b-f5681a796333.PNG)

## Guardando "coins" en "My Wallet"
Haciendo click sobre una moneda seleccionada el usuario puede guardarla en su billetera o "Wallet".

![GuardarWallet](https://user-images.githubusercontent.com/105566014/173739872-7ee466d8-3c24-4100-9fd1-adba41a5fac3.PNG)

## "My Wallet"
Haciendo click en "My Wallet" el usuario puede acceder a la base de datos para verificar las criptomonedas a帽adidas. El backend verifica el Token y si es v谩lido devolver谩 el listado al usuario.

![MyWallet](https://user-images.githubusercontent.com/105566014/173741465-ddcede78-a166-434b-850a-ca49b6acc830.PNG)

## Author

馃懁 **Dami谩n Contardi**

隆Desde ya muchas gracias!

