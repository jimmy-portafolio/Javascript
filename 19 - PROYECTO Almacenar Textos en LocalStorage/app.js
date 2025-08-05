document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById("formulario");
    const tweetInput = document.getElementById("tweet");
    const listaTweets = document.getElementById("lista-tweets");

    formulario.addEventListener("submit", agregarTweet);

    function agregarTweet(e) {
        e.preventDefault();

        const tweet = tweetInput.value.trim();

        if (tweet === '') {
            mostrarError("El tweet no puede estar vacío");
            return;
        }

        const tweetObj = {
            id: Date.now(),
            texto: tweet
        };

        crearTweetHTML(tweetObj);
        guardarTweetEnStorage(tweetObj);
        tweetInput.value = '';
    }

    function mostrarError(mensaje) {
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add("error");

        const contenido = document.querySelector('#contenido');
        contenido.insertBefore(error, document.querySelector(".container"));

        setTimeout(() => {
            error.remove();
        }, 3000);
    }

    function crearTweetHTML(tweet) {
        const li = document.createElement("li");
        li.dataset.id = tweet.id;
        li.textContent = tweet.texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("borrar-tweet");
        botonEliminar.onclick = () => eliminarTweet(tweet.id);

        li.appendChild(botonEliminar);
        listaTweets.appendChild(li);
    }

    function guardarTweetEnStorage(tweet) {
        let tweets = obtenerTweetsStorage();
        tweets.push(tweet);
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }

    function obtenerTweetsStorage() {
        let tweets = localStorage.getItem('tweets');
        return tweets ? JSON.parse(tweets) : [];
    }

    const tweets = obtenerTweetsStorage();
    tweets.forEach(tweet => crearTweetHTML(tweet));

    function eliminarTweet(id) {
        const tweetAEliminar = document.querySelector(`li[data-id="${id}"]`);
        if (tweetAEliminar) tweetAEliminar.remove();

        let tweets = obtenerTweetsStorage();
        tweets = tweets.filter(tweet => tweet.id !== id);
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }
});
