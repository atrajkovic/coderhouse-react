# Proyecto

Este proyecto fue creado para el curso de React de Coderhouse.

El proyecto consiste en el frontend de una tienda de café. El mismo permite visualizar los productos filtrando por categoría que define el país de procedencia, agregarlos al carrito y realizar un checkout generando la orden de los mismos.

El carrito de compras no es persistente sino que utiliza contextos custom de React, por lo que al recargar la página se pierde el contenido del mismo.

Los productos ofrecidos y su stock se obtienen desde Firestore. Las ordenes generadas también se almacenan en Firestore.

# Librerías

Adicionalmente al stack propuesto en el curso se utilizaron las siguientes librerías:

- yup: para validación de formularios. Es una librería que permite definir un schema de validación y luego utilizarlo para validar los datos ingresados por el usuario. Aporta validaciones más complejas que las que ofrece el propio HTML y son más simples de manejar.

- formik: para manejo de formularios. Es una librería que permite manejar el estado de los formularios de una forma más simple que utilizando el propio estado de React. Se integra muy bien con yup para validación de formularios.

- tailwindcss: para estilos. Es un framework de CSS que permite definir estilos de forma más simple que utilizando CSS puro. Se integra muy bien con React. Permite agregar estilo de forma declarativa mediante los className en los componentes de React.

- react-icons: para iconos. Es una librería que permite agregar iconos. Cuenta con una gran variedad de iconos y es muy simple de utilizar: solo hay que importar el icono que se desea utilizar y agregarlo al componente.
