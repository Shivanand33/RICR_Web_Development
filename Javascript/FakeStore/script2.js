 async function getPoduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productrow = document.getElementById("productcol")
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-9","p-2");
      d.innerHTML =  `
        <div class="container  card">
        <div class="d-flex rounded shadow">
                <div class="col-3">
                    <img src="${element.image}" alt="${element.image}" class="h-50">
                </div>
                <div class="col-9">
                    <div class="fw-bold fs-4">
                        Product name
                    </div>
                    <div class="fw-semibold">${element.rating.rate}/5(${element.rating.count}</div>
                    <div class="fw-bold">${element.price}}</div>
                     
                        <p>${element.title.length > 50 ? element.title.slice(0,50)+"..." :element.title}
                            </p>
                    
                    <div>${element.description}</div>
                    <div>
                        <Button class="btn btn-outline-primary">Add Cart Now</Button>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>

                </div>
                </div>

            </div>`;
            productrow.append(d);
    });
  } catch (error) {
    console.log(error);
  }
}
getPoduct()