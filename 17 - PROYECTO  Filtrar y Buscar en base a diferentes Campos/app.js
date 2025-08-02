const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
    llenarSelect();
})

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}
function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;

        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - Puertas: ${puertas} - Transmision: ${transmision} - Precio: ${precio}$ - Color:${color} `;
        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
})
year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt(e.target.value);    filtrarAuto();
})
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
})
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
})
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

function filtrarAuto() {
    const resultado = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        noResultado();
    }
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.minimo >= datosBusqueda.minimo
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.maximo <= datosBusqueda.maximo
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color
    } else {
        return auto;
    }
}

function noResultado() {
    limpiarHTML();

    const mensaje = document.createElement('div')
    mensaje.classList.add('alerta', 'error');
    mensaje.textContent = "No se encontraron autos con los filtros seleccionados";
    resultado.appendChild(mensaje)

}