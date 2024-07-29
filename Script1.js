const productos = [
    {
      id: 1,
      nombre: 'Celular Samsung Galaxy A15 LTE Blue Black',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 1',
      precio: '10.00',
      imagen: '/img/Celular1.png',
      caracteristica:'Pantalla 6.5" FHD+ Super AMOLED (90Hz) Cámara de 50MP Procesador Octa-Core Tecnología NFC'
    },
    {
      id: 2,
      nombre: 'Motorola G24',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 2',
      precio: '20.00',
      imagen: '/img/Celular2.png',
      caracteristica: 'Te presentamos el Motorola Moto G24 con un procesador Octa-Core 2.0GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+2 MP. Memoria interna de 128 GB y expandible con una MicroSd hasta 1TB'
    },
    {
      id: 3,
      nombre: 'Xiaomi Redmi Note 13',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 3',
      precio: '30.00',
      imagen: '/img/Celular3.png',
      caracteristica:'Te presentamos el Xiaomi Redmi Note 13 con un procesador Octa-Core 2.8GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus foto, tanto de día como de noche, con la cámara de 108+8+2MP. Memoria interna de 256 GB y expandible con una MicroSd hasta 1TB'
    },
    {
      id: 4,
      nombre: 'Lenovo IdeaPad 1',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 4',
      precio: '30.00',
      imagen: '/img/Notebook1.png',
      caracteristica: 'El Lenovo IdeaPad 1 14IGL7 82V6001DUS es una opción ideal para tareas informáticas básicas y la movilidad diaria. Con su procesador Intel Pentium Silver N5030 de hasta 3.1GHz y 4GB de memoria RAM DDR4, este portátil ofrece un rendimiento adecuado para actividades como navegar por internet, revisar correos electrónicos, ver contenido multimedia y trabajar en documentos sencillos. Aunque su almacenamiento eMMC de 128GB puede ser limitado para grandes archivos y programas, es suficiente para almacenar documentos y archivos personales. La pantalla HD de 14" con tecnología TN Anti-Glare ofrece una visualización decente para tareas básicas. Con puertos USB 2.0, USB 3.2 y USB-C, este portátil permite la conexión de periféricos y dispositivos externos. La conectividad Wifi 6 y Bluetooth 5.1 proporciona opciones de conexión rápidas y confiables, mientras que la webcam HD y el lector de tarjetas de memoria añaden funcionalidades útiles. Con el sistema operativo Windows 11 Home en modo S preinstalado, este portátil ofrece una experiencia moderna y segura para usuarios que buscan una solución básica y portátil en un elegante color Cloud Grey.'
    },
    {
      id: 5,
      nombre: 'NSX Kairos Intel Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 5',
      precio: '30.00',
      imagen: '/img/Notebook2.png',
      caracteristica: 'La Notebook Nsx Kairos I5 16gb Ram 500gb Ssd Freedos es el compañero perfecto para aquellos que buscan potencia y rendimiento en un dispositivo portátil. Con su procesador Intel Core i5 10210U y 16 GB de memoria RAM DDR4, podrás realizar múltiples tareas sin problemas. Su disco SSD de 500 GB garantiza una rápida respuesta y almacenamiento eficiente. La pantalla de 14.1" con resolución de 1920 px x 1080 px te brinda una experiencia visual inmersiva. Además, cuenta con una tarjeta gráfica Intel UHD graphics para disfrutar de imágenes nítidas y colores vibrantes. Su batería de 3600 mAh te permite utilizarla durante horas sin preocuparte por quedarte sin energía. Con Wi-Fi incorporado, podrás conectarte a internet en cualquier lugar. La Notebook Nsx Kairos I5 16gb Ram 500gb Ssd Freedos es la elección ideal para aquellos que buscan un equipo confiable y de alto rendimiento.'
    },
    {
      id: 6,
      nombre: 'Aiwa 15,6" Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 6',
      precio: '30.00',
      imagen: '/img/Notebook3.png',
      caracteristica:'Procesador Intel Core i5 para un rendimiento eficiente. 8GB de RAM para una experiencia multitarea sin interrupciones. 256GB SSD para un arranque y acceso rápido a tus archivos. Pantalla Full HD de 15.6" que brinda imágenes claras y nítidas. Windows 10 preinstalado, actualizado y seguro. Perfecta para profesionales que buscan rendimiento y fiabilidad en su jornada laboral. ¡No te la pierdas!'
    }
  ];
// --------------------- Verifica la opcion del menu productos elegida

document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem('productos', JSON.stringify(productos));
  
            // Agrega el evento de clic a los elementos del menú
            document.querySelectorAll('.item').forEach(function (item) {
                item.addEventListener('click', function () {
                    const productoId = this.dataset.id;
                    console.log(productoId);
                    // Redirige a la página de detalles con el ID del producto en la URL              
                    window.location.href = `Descripcion.html?id=${productoId}`;
              });
        });
        
    });
//-----------------------

// ---------------------- Hace el recorrido por la pagina y rellena los datos de los productos
  
  document.addEventListener('DOMContentLoaded', mostrarProductosEnTarjetas);
  document.querySelectorAll('.btn-mostrar').forEach(button => {
    button.addEventListener('click', (event) => {
      const id = parseInt(event.target.getAttribute('data-id'));
    });
  }); 

  
  function mostrarProductosEnTarjetas() {
    const tarjetas = document.querySelectorAll('.tarjeta');
  
    tarjetas.forEach((tarjeta) => {
      const dataId = parseInt(tarjeta.getAttribute('data-id'));
      const producto = productos.find(p => p.id === dataId);
  
      if (producto) {
        tarjeta.innerHTML = `
          <img src=${producto.imagen} class="card-img-top" alt="...">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <h3><p><strong>$${producto.precio}</strong></p></h3>
        `;
      }
    });
  }

  