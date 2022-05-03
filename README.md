# Boyero Sport 

**Boyero Sport** es  un e-commerce para la venta de ropa y artículos deportivos desarrollado en React Js

Este presenta 

 - Registro y login de usuarios: los campos son validados al realizar el registro.
- Filtro por categorías: tomando las categorías de la base de datos se generan filtros de productos.
- Filtro por marcas: tomando las marcas de la base de datos se generan filtros de productos.
- Filtro por disciplina deportiva: tomando las disciplinas de la base de datos se generan filtros de productos.
-  Carrito de compras:  agregar items, vista completa de los items del carrito, su total, y opcionalmente quitar un producto del carrito.
- Vistas de listas de productos: vista general de productos con foto y detalles mínimos.
- Vista de detalles: vista con todos los detalles del producto , la opción de agregar una cantidad del mismo y seleccionar talle o tamaño deseado.
-  Control de stock: Valida que los usuarios no puedan agregar más items al carrito de los que hay disponibles, y revisa el stock real al momento de generar la compra.

## Instalación

 1. Forkeá y cloná el repositorio
 2. Desde el directorio raiz del proyecto (Ej /app-boyeroSport) ejecutar el comando
 ```
   npm install
   ```
para instalar todas las dependecias del proyecto.
   
 4. Ejecutar la aplicación en el modo de desarrollo.
    Se abre desde http://localhost:3000 para verlo en su navegador.
   ```
   npm start
   ```
    

## Dependencias

El proyecto en su desarrollo presenta las siguientes dependencias:

- css bootstrap para dar estilo a la aplicación.
 - react-bootstrap para aprovechar los componentes de bootstrap. 
 - react-bootstrap-icons para hacer uso de los iconos de bootstrap.
 - react-carousel-minimal para visualizar las diferentes images de cada uno de los productos. 
 - react-elastic-carousel  dentro del home para el slider de productos recomendados y ofertas recientes de las marcas.
 - react-router-dom para la navegación.
 - react-bootstrap-sweetalert para generar mensajes de confirmación de tipo popup.
 - firebase  para persistencia de datos.


## Aplicación en funcionamiento
## Demo

![image](https://github.com/leanboyero/app-boyeroSport/demo.gif)

### Autor

Leandro Ezequiel Boyero

2022 - Curso de React Js en CoderHouse
