# Tabelro de Avisos
## Requerimientos
 * Docker 19.03.13
 * Puerto 4200 sin ningun servicio corriendo
 * Puerto 3000 sin ningun servicio corriendo
 * Puerto 4200 sin ningun servicio corriendo


## Iniciar aplicacion
En la ruta /tablero_de_avisos correr los siguientes comando:
* docker-compose build (Con este comando se buildean los 3 containers)
* docker-compose up (Con este comando levantan los containers)


## Usar la aplicacion
Acceder a:
* Puerto 4200 de la aplicacion para poder ver el cliente web de la aplicacion donde se podra agregar y visualizar los avisos
* Puerto 3000 de la aplicacion para poder realizar consultas directas al servidor

### Endpoints server
 * http://localhost:3000/api/pins (GET, POST)
 * http://localhost:3000/api/:id (GET, PUT, DELETE)

