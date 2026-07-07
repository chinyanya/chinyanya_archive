const searchInput = document.querySelector("#exploreSearch");
const sectionsContainer = document.querySelector("#carouselSections");

const CATEGORY_SECTIONS = [
  { title: "SEAL STICKER", categories: ["1"], order: ["3", "4", "2", "1", "5", "7", "6", "8"] },
  { title: "MEMO STICKER", categories: ["2"] },
  { title: "KEYRING", categories: ["5"] },
  { title: "ETC", categories: ["3", "4"] },
];

let sections = [];

async function loadExplore() {
  try {
    const products = await fetchProducts();

    renderSections(products);
  } catch (error) {
    console.error(error);
    sectionsContainer.innerHTML = `
      <p class="load-error">
        작업물 데이터를 불러오지 못했습니다.
      </p>
    `;
  }
}

function renderSections(products) {
  sectionsContainer.innerHTML = "";
  sections = [];

  CATEGORY_SECTIONS.forEach(({ title, categories, order }) => {
    const matchingProducts = products.filter((product) => categories.includes(product.category));
    const sectionProducts = order ? sortByOrder(matchingProducts, order) : shuffle(matchingProducts);

    if (!sectionProducts.length) return;

    const section = document.createElement("div");
    section.className = "carousel-section";

    const heading = document.createElement("h2");
    heading.className = "carousel-section-title";
    heading.textContent = title;

    const track = document.createElement("div");
    track.className = "carousel-track";

    section.appendChild(heading);
    section.appendChild(track);
    sectionsContainer.appendChild(section);

    const items = renderCarouselItems(track, sectionProducts);
    const sectionEntry = { track, items };
    sections.push(sectionEntry);

    centerItem(items[Math.floor(items.length / 2)], false);
    updateActiveItem(sectionEntry);

    let scrollTimeout;
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => updateActiveItem(sectionEntry), 80);
    });
  });
}

function sortByOrder(products, order) {
  return [...products].sort((a, b) => order.indexOf(a.no) - order.indexOf(b.no));
}

function renderCarouselItems(track, products) {
  const items = [];
  const displayedProducts = products.filter((product) =>
    product.images.some((image) => image.type === "main")
  );

  displayedProducts.forEach((product) => {
    const mainImage = product.images.find((image) => image.type === "main");

    const item = document.createElement("div");
    item.className = "carousel-item";
    item.dataset.name = product.name;

    item.innerHTML = `
      <div class="carousel-image-wrap">
        <img
          src="${WORK_IMAGE_BASE_PATH}${mainImage.file_name}"
          alt="${product.name || "archive image"}"
          loading="lazy"
        />
      </div>
      <p class="carousel-name">${product.name}</p>
      <p class="carousel-memo">${product.memo}</p>
      <p class="carousel-price">${formatPrice(product.price)}</p>
    `;

    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        openDetailPopup(product, displayedProducts);
      } else {
        centerItem(item, true);
      }
    });

    track.appendChild(item);
    items.push(item);
  });

  return items;
}

function formatPrice(price) {
  const num = Number(price);
  if (!price || Number.isNaN(num)) return "";
  return `${num.toLocaleString()}₩`;
}

function centerItem(item, smooth) {
  if (!item) return;

  item.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    inline: "center",
    block: "nearest",
  });
}

function updateActiveItem({ track, items }) {
  if (!items.length) return;

  const trackRect = track.getBoundingClientRect();
  const center = trackRect.left + trackRect.width / 2;

  let closest = items[0];
  let closestDistance = Infinity;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = Math.abs(itemCenter - center);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = item;
    }

    item.classList.remove("active");
  });

  closest.classList.add("active");
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  for (const section of sections) {
    const match = section.items.find((item) => (item.dataset.name || "").toLowerCase().includes(query));
    if (match) {
      centerItem(match, true);
      break;
    }
  }
});

loadExplore();
