//*** Consumo API Produtos ***

const produtos = fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
.then(response => response.json())
.then(data => {
    const ul = document.querySelector('[data-js="produtos"]')
    ul.innerHTML = data.products[1].image

   
});

