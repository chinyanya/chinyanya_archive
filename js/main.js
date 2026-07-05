const workGrid = document.querySelector("#workGrid");

async function loadWorks() {
  try {
    const products = await fetchProducts();

    renderWorks(shuffle(products));
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

  products
    .filter((product) => product.category !== BACKGROUND_CATEGORY)
    .forEach((product) => {
      const mainImage = product.images[0];

      if (!mainImage) return;

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
          src="${WORK_IMAGE_BASE_PATH}${mainImage.file_name}"
          alt="${product.name || "archive image"}"
          loading="lazy"
        />
        <figcaption class="work-name-overlay"><span>${product.name}</span></figcaption>
      `;

      item.addEventListener("click", () => openSaleDetail(product));

      workGrid.appendChild(item);
    });
}

function openSaleDetail(work) {
  // TODO: 다음 턴에서 판매 정보 팝업 구현 예정
  console.log("판매물 클릭:", work);
}

loadWorks();
