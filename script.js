//*** Consumo API Produtos ***

const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data.products)

    const liProducts = data.products.reduce((accumulator, data) => {
      accumulator += `
        <li class="card-prod">
        <img class"card-image" src="http:${data.image}" alt="${data.name}" />        
        <h1 class="card-title">${data.name}</h1>
        <p class="card-subtitle">${data.description}</p>
        <strike class="card-strike">De: R$${data.oldPrice}</strike>
        <h3 class="card-price">Por: R$${data.price}</h3>
        <p class="card-parcel">ou ${data.installments.count}x de R$ ${data.installments.value}</p>
        <button class="card-btn">Comprar</button>
        </li>`;
      //console.log(data.installments)
      return accumulator;
    }, "");

    const ul = document.querySelector('[data-js="products"]');
    ul.innerHTML = liProducts;

    // console.log(ul);
  });

function moreProducts() {
  const urlNext = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2`;

  fetch(urlNext)
    .then((response) => response.json())
    .then((data) => {
      const lisProducts = data.products.reduce((accumulator, data) => {
        accumulator += `
            <li class="card-prod">
            <img class="card-image" src="http:${data.image}" alt="${data.name}" />        
            <h1 class="card-title">${data.name}</h1>
            <p class="card-subtitle">${data.description}</p>
            <strike class="card-strike">De: R$${data.oldPrice}</strike>
            <h3 class="card-price">Por: R$${data.price}</h3>
            <p class="card-parcel">ou ${data.installments.count}x de R$ ${data.installments.value}</p>
            <button class="card-btn">Comprar</button>
            </li>`;

        return accumulator;
      }, "");

      const ul = document.querySelector('[data-js="more-products"]');
      ul.innerHTML = lisProducts;
    });
}
