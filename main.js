class pizza {
    constructor(id, nombre, ingredientes, precio) {

        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}
const calabressa = new pizza(767, "calabressa", ['salame', 'queso'], 1100)
const cebollas = new pizza(925, "cebollas", ['queso', 'cebolla'], 1340)
const palmito = new pizza(125, "palmito", ['queso', 'palmito', 'aceituna'], 980)
const muzzarella = new pizza(340, "muzzarella", ['muzzarella', 'aceituna'], 1560)
const huevos = new pizza(876, "huevos", ['queso', 'huevos'], 2300)
const fugazzeta = new pizza(1340, "fugazzeta", ['queso', 'cebolla'], 1840)

const menu = []
menu.push(calabressa, cebollas, palmito, muzzarella, huevos, fugazzeta)


//Las pizzas de id impar
for (let i = 0; i < menu.length; i++) {
    if (menu[i].id % 2 !== 0) {
        console.log('Id de la ' + menu[i].nombre + ' es ' + menu[i].id)
    }
}
//Hay alguna pizza que vaga menos de 390

const precio = menu.some(menu => menu.precio > 390)
console.log("Varias pizzas tienen un valor mayor a $390")
//Nombre y precios de las pizzas
let precioSolo = []
for (let i = 0; i < menu.length; i++) {
    precioSolo.push({
        nombre: menu[i].nombre, precio: menu[i].precio
    })

    console.log('La pizza completa ' + menu[i].nombre + ' vale:$' + menu[i].precio)
}
console.log('')
// Todos los ingredientes 
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i].nombre + ' '+'Compuesta por:')

    for (let j = 0; j < menu[i].ingredientes.length; j++) {
        console.log('' + menu[i].ingredientes[j])
    }
    console.log('')
    console.log('')
}
