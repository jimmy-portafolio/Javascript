document.getElementById('cargarPosts').addEventListener('click', cargarPosts);


function cargarPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('la respuest de la red NO es buena' + response.statusText)
            }
            return response.json()
        })
        .then(data => {
            mostrarPosts(data)
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);
            document.getElementById('postData').innerHTML = '<p>Error al cargar los datos.</p>';
        });
}

function mostrarPosts(data) {
    const contenedorPosts = document.getElementById('postData')

    contenedorPosts.innerHTML = '<h2>Lista de publicacion</h2>';
    data.slice(0, 5).forEach(Element => {
        const postElement = document.createElement('div');
        postElement.classList.add('caja');
        postElement.innerHTML = `<h3>${Element.title}</h3> 
        <p>${Element.body}</p>`

        contenedorPosts.appendChild(postElement)
    })
}
// POST

document.getElementById('formCrearPost').addEventListener('submit', crearPost);

function crearPost(evento) {

    evento.preventDefault();


    let titulo = document.getElementById('postTitle').value;
    let cuerpo = document.getElementById('postBody').value;


    let nuevoPost = {
        title: titulo,
        body: cuerpo,
        userId: 1
    };


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPost)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            console.log('Éxito:', data);
            alert(`¡Publicación creada con éxito! (ID simulado: ${data.id})`);


            document.getElementById('formCrearPost').reset();


        })
        .catch((error) => {

            console.error('Error:', error);
            alert('Error al crear la publicación.');
        });
}