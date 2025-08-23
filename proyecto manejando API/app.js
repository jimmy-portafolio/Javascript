const baseURL = 'https://fakestoreapi.com'
//GET
function getAllProducts() {
    fetch(`${baseURL}/products`)
        .then(response => response.json())
        .then(data => {
            // fusionar con HTML y CSS
            const container = document.querySelector('#productContainer')
            //recorrer cada dato del 
            data.forEach(element => {
                container.innerHTML = container.innerHTML + `

                <div class="card" style="width: 18rem;" data-id=${element}>
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <a href="#" class="btn btn-primary">Ver products</a>
                    </div>
                </div>
            `
            }
        );
        });
}
document.addEventListener('DOMContentLoaded', function () {
    getAllProducts()
})