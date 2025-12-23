async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productcol");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-4", "p-2");

      d.innerHTML = `
          <div class="rounded shadow  h-100 d-flex rounded shadow gap-3">
                <div class="col-3">
                    <img src=${element.image} alt=${
        element.title
      } class="object-fit-contain h-100 w-100" />
                </div>
                <div class="col-8">
                    <div class="fw-bold fs-4">
                        ${
                          element.title.length > 50
                            ? element.title.slice(0, 45) + "..."
                            : element.title
                        }
                    </div>
                    <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      }</div>
                    <div class="fw-bold">₹ ${element.price * 100}</div>
                    <div class="mb-5">
                          ${element.description.slice(0, 80)}...
                    </div>
                    
                    <div class="my-5">
                        <Button class="btn btn-outline-primary">Add Cart Now</Button>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>

                </div>
`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
