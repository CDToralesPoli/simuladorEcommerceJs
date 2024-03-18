const CATEGORIAS = [
    {   
        i : 1,
        nombre : "Alimentos"
    },
    {
        i : 2,
        nombre : "Accesorios"
    }
];

const SUBCATEGORIAS = [
    {
        i : 1,
        nombre : "Perros"
    },
    {
        i : 2,
        nombre : "Gatos"
    }
];

const ALIMENTOS_PERROS = [
    {   
        i : 1,
        nombre: "Agility Wet 340gr",
        precio: 2200
    },
    {   
        i : 2,
        nombre : "Pro Plan 3kg",
        precio : 21700
    },
    {
        i : 3,
        nombre: "Old Prince 7.5kg",
        precio: 23850
    },
    {
        i : 4,
        nombre : "Fawna 15kg",
        precio: 62100
    }
];

const ALIMENTOS_GATOS = [
    {
        i : 1,
        nombre: "Pro Plan Urinary 1kg",
        precio: 5200
    },
    {
        i : 2,
        nombre : "Catpro 3kg",
        precio : 13500
    },
    {
        i : 3,
        nombre: "Sieger Katze 7.5kg",
        precio: 35600
    },
    {
        i : 4,
        nombre : "Agility Kitten 10kg",
        precio: 42800
    }
];

const ACCESORIOS = [
    {
        i : 1,
        nombre: "Pretal + Correa Extensible",
        precio: 8000
    },
    {
        i : 2,
        nombre: "Comedero Regu Diet",
        precio: 4800
    },
    {
        i : 3,
        nombre: "Bandeja Sanitaria",
        precio: 2700
    },
    {
        i : 4,
        nombre: "Bebedero con deposito",
        precio: 6300
    }
];

let carrito = [];

function mostrarCarrito(carrito) {
    if (carrito.length > 0) {
      let resumen = 'Aqui puedes ver el resumen de tu compra:\n\n';
      let totalCompra = 0;
  
      carrito.forEach(item => {
        resumen += `${item.cantidad} unidad(es) de ${item.nombre} - Precio total: $${item.precioTotal}\n`;
        totalCompra += item.precioTotal;
      });
  
      resumen += `\nTotal de la compra: $${totalCompra}`;
      alert(resumen);
      // Agregar un mensaje de despedida
      alert('¡Gracias por tu compra!');
    } else {
      alert('No has agregado ningún producto al carrito.');
    }
  }

function continuarComprando (){
    let finalizar = prompt(`Que deseas hacer? \n\n 1 - Continuar comprando\n 2 - Finalizar`);
    if (parseInt(finalizar) === 1) {
        procesoDeCompra();
    } else if (parseInt(finalizar) == 2) {
        mostrarCarrito(carrito);
    } else {
        continuarComprando();
    }
    return;
}

function recorrerCategoria(categoria) {
    let itemsCategoria = categoria.map(
        (items) => items.i +" - "+items.nombre);
    return (itemsCategoria.join(`\n`))
};

function recorrerProductos(categoria) {
    let productos = categoria.map(
        (items) => items.i +" - "+items.nombre+" --- $"+items.precio);
    return (productos.join(`\n`))
};

function valorIncorrecto() {
    let iniciar = confirm(`El valor ingresado no es una opcion valida, deseas intentar nuevamente?`)
    if (iniciar == true){
        procesoDeCompra();
    } else {
        alert("Hasta pronto");
    }
    return;
}

function iniciarCompra() {
    iniciar = confirm("Bienvenido\nDeseas ingresar a la tienda?\n(si deseas ingresar luego deberas recargar esta pagina)");
    if (iniciar == true){
        procesoDeCompra();
    } else {
        alert("Hasta pronto");
    }
    return;
}

function procesoDeCompra (){

    let categoria = prompt(`¿Que deseas comprar? Ingresa el valor correspondiente a la categoria.\n\n${recorrerCategoria(CATEGORIAS)}`);
    
    if (parseInt(categoria) === 1){
        let subCategoria = prompt(`Ingresa una subcategoria.\n\n${recorrerCategoria(SUBCATEGORIAS)}`);
        if (parseInt(subCategoria) === 1){
            let producto = prompt(`Ingresa el producto elegido.\n\n${recorrerProductos(ALIMENTOS_PERROS)}`);
            if (isNaN(parseInt(producto)) || (parseInt(producto) < 1 || parseInt(producto) > 4 )) {
                valorIncorrecto();
            } else {
                let unidades = prompt(`¿Cuantas unidades de ${ALIMENTOS_PERROS[producto-1].nombre} deseas agregar a tu carrito?`);
                if (isNaN(unidades) || unidades < 1) {   
                    valorIncorrecto();
                } else {
                    carrito.push({ nombre: ALIMENTOS_PERROS[producto-1].nombre, cantidad: unidades, precioTotal: parseInt((ALIMENTOS_PERROS[producto-1].precio)*unidades) }); 
                    alert(`Has agregado ${unidades} unidad(es) de ${ALIMENTOS_PERROS[producto-1].nombre}. Por un valor de $${parseInt((ALIMENTOS_PERROS[producto-1].precio)*unidades)}.`);
                }
                continuarComprando();
            }
        }
        else if (parseInt(subCategoria) === 2){
            let producto = prompt(`Ingresa el producto elegido.\n\n${recorrerProductos(ALIMENTOS_GATOS)}`);
            if (isNaN(parseInt(producto)) || (parseInt(producto) < 1 || parseInt(producto) > 4 )) {
                valorIncorrecto();
            } else {
                let unidades = prompt(`¿Cuantas unidades de ${ALIMENTOS_GATOS[producto-1].nombre} deseas agregar a tu carrito?`);
                if (isNaN(unidades) || unidades < 1) {   
                    valorIncorrecto();
                } else {
                    carrito.push({ nombre: ALIMENTOS_GATOS[producto-1].nombre, cantidad: unidades, precioTotal: parseInt((ALIMENTOS_GATOS[producto-1].precio)*unidades) }); 
                    alert(`Has agregado ${unidades} unidad(es) de ${ALIMENTOS_GATOS[producto-1].nombre}. Por un valor de $${parseInt((ALIMENTOS_GATOS[producto-1].precio)*unidades)}.`);
                }
                continuarComprando();
            }
        }
        else {
            valorIncorrecto();
        }
    }
    else if (parseInt(categoria) === 2) {
        let producto = prompt(`Ingresa el producto elegido.\n\n${recorrerProductos(ACCESORIOS)}`);
        if (isNaN(parseInt(producto)) || (parseInt(producto) < 1 || parseInt(producto) > 4 )) {
            valorIncorrecto();
        } else {
            let unidades = prompt(`¿Cuantas unidades de ${ACCESORIOS[producto].nombre} deseas agregar a tu carrito?`);
            if (isNaN(unidades) || unidades < 1) {
                valorIncorrecto();
            } else {
                carrito.push({ nombre: ACCESORIOS[producto-1].nombre, cantidad: unidades, precioTotal: parseInt((ACCESORIOS[producto-1].precio)*unidades) }); 
                alert(`Has agregado ${unidades} unidad(es) de ${ACCESORIOS[producto-1].nombre}. Por un valor de $${parseInt((ACCESORIOS[producto-1].precio)*unidades)}.`);
            }   
            continuarComprando();
        }
    }
    else {
        valorIncorrecto();
    } 
}
iniciarCompra();
