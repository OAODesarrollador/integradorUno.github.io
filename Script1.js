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
      descripcion: 'Descripción del Producto 3',
      precio: '30.00',
      imagen: '/img/Notebook1.png'
    },
    {
      id: 5,
      nombre: 'NSX Kairos Intel Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 3',
      precio: '30.00',
      imagen: '/img/Notebook2.png'
    },
    {
      id: 6,
      nombre: 'Aiwa 15,6" Core i5',
      categoria: 'Notebooks',
      descripcion: 'Descripción del Producto 3',
      precio: '30.00',
      imagen: '/img/Notebook3.png'
    }
  ];

  document.addEventListener('DOMContentLoaded', mostrarProductosEnTarjetas);

  document.querySelectorAll('.btn-mostrar').forEach(button => {
    button.addEventListener('click', (event) => {
      const id = parseInt(event.target.getAttribute('data-id'));
      console.log(`Botón ${id} clickeado`);
      mostrarDatos(id);
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