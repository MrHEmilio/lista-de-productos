const main = document.getElementById("mainWithId");
const URLMain = "https://fakestoreapi.com/products/";
const carrusel = document.getElementById("dentroDelCarrusel");


function getData(){
    fetch(URLMain)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            // console.log(res.length);
            // console.log(res[19]);
            createCards(res);
        })
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend", `<div class="alert alert-danger" role="alert">
  ${err.message}
</div>`);
    });
}

// function createCards(prods){
//     prods.forEach (prod =>{
//         carrusel.insertAdjacentHTML("beforeend", `<div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.title}">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${prod.title}</h5>
//         <p class="card-text">${prod.description}</p>
//         <p class="card-text"><small class="text-body-secondary">$ ${prod.price} USD</small></p>
//       </div>
//     </div>
//   </div>
// </div>`);
//     });
// }

function createCards(prods){
    prods.forEach((prod, index) => {
        carrusel.insertAdjacentHTML("beforeend", `
        <div class="carousel-item ${index == 0 ? "active" : ""}">
          <div class="card mb-3 mx-auto" style="width: 540px; height: 300px; overflow: scroll; padding-top: 30px; padding-left 15px; padding-right: 15 px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${prod.title}</h5>
                  <p class="card-text">${prod.description}</p>
                  <p class="card-text"><small class="text-body-secondary">$ ${prod.price} USD</small></p>
                    
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Learn more
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                ${prod.description}
                                </div>
                                <div class="categoryOfTheProduct" style="margin-left: 5px;">Category: <strong>${prod.category}</strong></div>
                                <div class="modal-footer">
                                    <!--- <div class="categoryOfTheProduct" style="margin-left: 5px;">Category: <strong>${prod.category}</strong></div> --->
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <!-- <button type="button" class="btn btn-primary">Comprar</button> -->
                                </div>
                                </div>
                            </div>
                            </div>
                  </div>
              </div>
            </div>
          </div>
        </div>`);
    });
}


getData();