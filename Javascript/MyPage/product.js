async function getProducts() {
  try {
    const res = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const data = await res.json();

    const productList = document.getElementById("productcol");

    const fragment = document.createDocumentFragment();

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-4", "p-2");

      d.innerHTML = `
        <div class="rounded shadow h-100 d-flex gap-3">
          <div class="col-3">
            <img src="${element.image_link}" alt="${
        element.name
      }" class="object-fit-contain h-100 w-100" />
          </div>
          <div class="col-8">
            <div class="fw-bold fs-4">
              ${
                element.name.length > 50
                  ? element.name.slice(0, 45) + "..."
                  : element.name
              }
            </div>
            <div class="fw-semibold">
              Rating: ${element.rating ?? "No rating"}
            </div>
            <div class="fw-bold">
              Price: ${element.price_sign ?? "₹"}${element.price ?? "0"}
            </div>
            <div class="mb-5">
              ${
                element.description
                  ? element.description.slice(0, 80) + "..."
                  : ""
              }
            </div>
            <div class="my-5">
              <button class="btn btn-outline-primary">Add Cart Now</button>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      `;

      fragment.appendChild(d);
    });

    productList.appendChild(fragment);
  } catch (error) {
    console.log("Error fetching products:", error.message);
  }
}

getProducts();
