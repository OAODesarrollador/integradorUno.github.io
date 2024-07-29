const productos = [
    {
      id: 1,
      nombre: 'Celular Samsung Galaxy A15 LTE Blue Black',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 1',
      precio: '10.00',
      imagen: '/img/Celular1.png'
    },
    {
      id: 2,
      nombre: 'Motorola G24',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 2',
      precio: '20.00',
      imagen: '/img/Celular2.png'
    },
    {
      id: 3,
      nombre: 'Xiaomi Redmi Note 13',
      categoria: 'Celulares',
      descripcion: 'Descripción del Producto 3',
      precio: '30.00',
      imagen: '/img/Celular3.png'
    },
    {
      id: 4,
      nombre: 'Lenovo IdeaPad 1',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 4',
      precio: '30.00',
      imagen: '/img/Notebook1.png'
    },
    {
      id: 5,
      nombre: 'NSX Kairos Intel Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 5',
      precio: '30.00',
      imagen: '/img/Notebook2.png'
    },
    {
      id: 6,
      nombre: 'Aiwa 15,6" Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 6',
      precio: '30.00',
      imagen: '/img/Notebook3.png'
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

  