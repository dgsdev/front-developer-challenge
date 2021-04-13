const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=3`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.products);

    // for (let i = 0; i < data.products.length; i++) {
    //   if (i == 2) break;
    //   const lisProducts = data.products[1];

    // `<li class="card-prod">
    // <img class-card-image" src="http:${data.image}" alt="${data.name}" />
    // <h1 class="card-title">${data.name}</h1>
    // <p class="card-subtitle">${data.description}</p>
    // <strike class="card-strike">De: R$${data.oldPrice}</strike>
    // <h3 class="card-price">Por: R$${data.price}</h3>
    // <p class="card-parcel">ou ${data.installments.count}x de R$ ${data.installments.value}</p>
    // </li>`

    const lisProducts = data.products.reduce((accumulator, data) => {
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

      return accumulator;
    }, "");

    const ul = document.querySelector('[data-js="card-products"]');
    ul.innerHTML = lisProducts;

    console.log(lisProducts);
  });
