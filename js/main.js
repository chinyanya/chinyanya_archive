const workGrid = document.querySelector("#workGrid");

async function loadWorks() {
  try {
    const products = await fetchProducts();

    renderWorks(products);
  } catch (error) {
    console.error(error);
    workGrid.innerHTML = `
      <p class="load-error">
        작업물 데이터를 불러오지 못했습니다.
      </p>
    `;
  }
}

function renderWorks(products) {
  workGrid.innerHTML = "";

  const displayedProducts = products.filter((product) =>
    product.images.some((image) => image.type === "main")
  );

  const gridEntries = displayedProducts.flatMap((product) => {
    const productImages = product.images.filter(
      (image) => image.type === "main" || image.file_name.startsWith("bg_")
    );

    return productImages.map((image) => ({ product, image }));
  });

  shuffle(gridEntries).forEach(({ product, image }) => {
    const item = document.createElement("figure");
    item.className = "work-item sale";

    item.dataset.no = product.no;
    item.dataset.name = product.name;
    item.dataset.memo = product.memo;
    item.dataset.price = product.price;
    item.dataset.exhibition = product.exhibition;
    item.dataset.category = product.category;

    item.innerHTML = `
      <img
        src="${WORK_IMAGE_BASE_PATH}${image.file_name}"
        alt="${product.name || "archive image"}"
        loading="lazy"
      />
      <figcaption class="work-name-overlay"><span>${product.name}</span></figcaption>
    `;

    item.addEventListener("click", () => openDetailPopup(product, displayedProducts));

    workGrid.appendChild(item);
  });
}

loadWorks();
