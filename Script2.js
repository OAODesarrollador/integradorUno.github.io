document.addEventListener('DOMContentLoaded', function () {
    // Obtén los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const productoId = parseInt(params.get('id'), 10);

    // Recupera el array de productos de LocalStorage
    const productos = JSON.parse(localStorage.getItem('productos'));

    // Encuentra el producto correspondiente por ID
    const producto = productos.find(p => p.id === productoId);
    
    // Muestra los detalles del producto
    
    detalleproducto.innerHTML = `
    <div class="card mb-3 " style="wh;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${producto.imagen} class="card-img-top" alt="...">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <h3><p><strong>$${producto.precio}</strong></p></h3>
                </div>
            </div>
        </div>
    </div>
  `;   
});