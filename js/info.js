const SLIDES = [
  { type: "collage", title: "문구전 2026 여름 뒷풀이마켓", period: "07.09-07.19" },
  {
    type: "gift",
    title: "GIFT",
    subtitle: "전 상품 선착순 증정 · 조기 소진 가능",
    tiers: [
      {
        label: "전체 구매",
        detail: "푸딩 모조지 + 스티커",
        images: ["mojoji_5.jpg", "inpal_domusong.jpg"],
      },
      {
        label: "5,000원 특전",
        detail: "미니 씰스티커 랜덤 1종",
        images: ["lemontang_seals.jpg", "summer_mini_seal_1.jpg", "summer_mini_seal_2.jpg"],
      },
      {
        label: "20,000원 특전",
        detail: "랜덤 씰스티커 1장 (구매하신 스티커와 중복될 수 있음)",
        images: [
          "space_aquarium_kitty.jpg",
          "kitsch_medical_kitty.jpg",
          "swimsuit_1_sticker.jpg",
          "mintcore_sticker.jpg",
        ],
      },
    ],
  },
  {
    type: "package-overview",
    packages: [
      {
        title: "NEW 신상 씰스티커 패키지",
        items: [
          { image: "swimsuit_1_sticker.jpg", name: "블루 레몬 에이드와 바다", memo: "유포지 무광 · 97mm x 156mm", price: 3200 },
          { image: "swimsuit_2_sticker.jpg", name: "수박 주스와 꽃 한 송이", memo: "유포지 무광 · 97mm x 156mm", price: 3200 },
          { image: "matcha_latte_strawberry_sticker.jpg", name: "말차라떼에 딸기 두 방울", memo: "유포지 무광 · 97mm x 156mm", price: 3200 },
          { image: "mintcore_sticker.jpg", name: "민트라떼에 초코 한 스푼", memo: "유포지 매트펄 · 97mm x 156mm", price: 3500 },
        ],
        originalPrice: 13100,
        salePrice: 12000,
      },
      {
        title: "냥이끼끼 씰스티커 패키지",
        items: [
          { image: "space_aquarium_kitty.jpg", name: "우주 아쿠아리움 냥이끼끼", memo: "유포지 무광 · 97mm x 156mm", price: 3200 },
          { image: "redpink_strawberry_kiki.jpg", name: "레드핑크 딸기 끼끼", memo: "유포지 무광 · 97mm x 156mm", price: 3000 },
          { image: "soda_melon_cherry_kitty.jpg", name: "소다 메론 체리 냥이끼끼", memo: "유포지 무광 · 97mm x 156mm", price: 3000 },
          { image: "kitsch_medical_kitty.jpg", name: "키치메디컬 냥이끼끼", memo: "유포지 무광 · 97mm x 156mm", price: 3000 },
        ],
        originalPrice: 12000,
        salePrice: 9000,
      },
    ],
  },
  {
    type: "product",
    name: "블루 레몬 에이드와 바다 씰스티커",
    image: "swimsuit_1_sticker.jpg",
    backdrop: "backdrop_swimsuit_1.jpg",
    description: "파도를 닮은 머리카락의 소녀와 조개·불가사리 등 다양한 해양 소품 그리고 청량한 바다 사진까지 더해진 활용도 높은 구성",
    memo: "유포지 무광 · 97mm x 156mm",
    exhibition: "문구전2026",
    price: 3200,
    examples: ["eg_swimsuit_1.jpg", "eg_3200_seals.jpg"],
  },
  {
    type: "product",
    name: "수박 주스와 꽃 한 송이 씰스티커",
    image: "swimsuit_2_sticker.jpg",
    backdrop: "backdrop_swimsuit_2.jpg",
    description: "상큼한 컬러의 수영복을 입은 소녀와 반짝이는 다양한 소품이 어우러진 활용도 높은 휴양지 무드",
    memo: "유포지 무광 · 97mm x 156mm",
    exhibition: "문구전2026",
    price: 3200,
    examples: ["eg_swimsuit_2.jpg", "eg_3200_seals.jpg"],
  },
  {
    type: "product",
    name: "말차라떼에 딸기 두 방울 씰스티커",
    image: "matcha_latte_strawberry_sticker.jpg",
    backdrop: "backdrop_matcha_latte.jpg",
    description: "여름 모리걸 룩을 입은 소녀와 포인트가 되는 딸기 목걸이 그리고 숲 한가운데 있는 듯 포근한 그린 톤 무드",
    memo: "유포지 무광 · 97mm x 156mm",
    exhibition: "문구전2026",
    price: 3200,
    examples: ["eg_matcha_latte.jpg", "eg_3200_seals.jpg"],
  },
  {
    type: "product",
    name: "민트라떼에 초코 한 스푼 씰스티커",
    image: "mintcore_sticker.jpg",
    backdrop: "backdrop_mintcore.jpg",
    description: "매트펄로 반짝이는 민트·초코·핑크 조합에 도트와 별 패턴 그리고 레이스 포인트 옷을 입은 소녀까지 담은 사랑스러운 구성",
    memo: "유포지 매트펄 · 97mm x 156mm",
    exhibition: "문구전2026",
    price: 3500,
    examples: ["eg_mintcore.jpg", "eg_3200_seals.jpg"],
  },
  {
    type: "bundle",
    title: "냥이끼끼 모모팩",
    contents: [
      "씰스티커 4종 (우주 아쿠아리움 · 레드핑크 · 소다 메론 체리 · 키치메디컬)",
      "모조지 세트 (딸기 · 해마 · 주사기 · 메론 소다)",
      "아크릴 키링 2종",
      "여름날 미니 씰스티커 2종",
    ],
    largeImageCount: 5,
    images: [
      "space_aquarium_kitty.jpg",
      "redpink_strawberry_kiki.jpg",
      "soda_melon_cherry_kitty.jpg",
      "kitsch_medical_kitty.jpg",
      "mojoji_set.jpg",
      "keyring_1.jpg",
      "keyring_2.jpg",
      "summer_mini_seal_1.jpg",
      "summer_mini_seal_2.jpg",
    ],
    originalPrice: 25000,
    salePrice: 19000,
  },
];

const INFO_ASSET_PATH = "./assets/info/";

const infoSlidesContainer = document.querySelector("#infoSlides");

async function loadInfoSlides() {
  try {
    const products = await fetchProducts();
    const collageImages = products.flatMap((product) =>
      product.images.filter((image) => image.type === "main" || image.file_name.startsWith("bg_"))
    );

    SLIDES.forEach((slideData, index) => {
      const slide = createSlide(slideData, collageImages);
      attachDownloadButton(slide, index);
      infoSlidesContainer.appendChild(slide);
    });
  } catch (error) {
    console.error(error);
    infoSlidesContainer.innerHTML = `
      <p class="load-error">
        이미지를 불러오지 못했습니다.
      </p>
    `;
  }
}

function createSlide(slideData, collageImages) {
  switch (slideData.type) {
    case "gift":
      return createGiftSlide(slideData);
    case "package-overview":
      return createPackageOverviewSlide(slideData);
    case "product":
      return createProductSlide(slideData);
    case "bundle":
      return createBundleSlide(slideData);
    case "collage":
    default:
      return createCollageSlide(shuffle(collageImages), slideData);
  }
}

function imageTag(fileName) {
  return `<img src="${WORK_IMAGE_BASE_PATH}${fileName}" alt="" loading="lazy" />`;
}

function priceTag(originalPrice, salePrice) {
  return `
    <span class="info-price-strike">${originalPrice.toLocaleString()}원</span>
    <span class="info-price-sale">${salePrice.toLocaleString()}원</span>
  `;
}

function createCollageSlide(images, { title, period }) {
  const slide = document.createElement("div");
  slide.className = "info-slide";

  const grid = document.createElement("div");
  grid.className = "work-grid";

  images.forEach((image) => {
    const item = document.createElement("figure");
    item.className = "work-item";
    item.innerHTML = imageTag(image.file_name);
    grid.appendChild(item);
  });

  slide.appendChild(grid);

  if (title) {
    const overlay = document.createElement("div");
    overlay.className = "info-slide-overlay";
    overlay.innerHTML = `
      <p class="info-slide-caption">
        <span class="info-slide-title">${title}</span>
        <span class="info-slide-period">${period}</span>
      </p>
    `;
    slide.appendChild(overlay);
  }

  return slide;
}

function createGiftSlide({ title, subtitle, tiers }) {
  const slide = document.createElement("div");
  slide.className = "info-slide info-slide-gift";

  const tiersHtml = tiers
    .map((tier, tierIndex) => {
      const imagesHtml = tier.images
        .map(
          (file, i) =>
            `<img class="info-gift-tier-img info-gift-tier-img-${i}" src="${WORK_IMAGE_BASE_PATH}${file}" alt="" loading="lazy" />`
        )
        .join("");

      return `
        <div class="info-gift-tier ${tierIndex % 2 === 1 ? "info-gift-tier-reverse" : ""}">
          <div class="info-gift-tier-images">${imagesHtml}</div>
          <div class="info-gift-tier-text">
            <p class="info-gift-tier-label">${tier.label}</p>
            <p class="info-gift-tier-detail">${tier.detail}</p>
          </div>
        </div>
      `;
    })
    .join("");

  slide.innerHTML = `
    <div class="info-product-backdrop" style="background-image:url('${WORK_IMAGE_BASE_PATH}bg_ranerd-sea-5751723.jpg')"></div>
    <div class="info-product-dim"></div>
    <div class="info-gift-card">
      <div class="info-product-card-controls">
        <span class="info-product-control">‹</span>
        <span class="info-product-control">›</span>
        <span class="info-product-control">×</span>
      </div>
      <div class="info-gift-header">
        <h2 class="info-gift-title">${title}</h2>
        <p class="info-gift-subtitle">${subtitle}</p>
      </div>
      <div class="info-gift-tiers">${tiersHtml}</div>
    </div>
  `;

  return slide;
}

function createPackageOverviewSlide({ packages }) {
  const slide = document.createElement("div");
  slide.className = "info-slide info-slide-packages";

  const packagesHtml = packages
    .map((pkg) => {
      const itemsHtml = pkg.items
        .map(
          (item) => `
            <div class="info-package-item">
              <img class="info-package-item-image" src="${WORK_IMAGE_BASE_PATH}${item.image}" alt="" loading="lazy" />
              <p class="info-package-item-name">${item.name}</p>
              <p class="info-package-item-memo">${item.memo}</p>
              <p class="info-package-item-price">${item.price.toLocaleString()}원</p>
            </div>
          `
        )
        .join("");

      return `
        <div class="info-package">
          <div class="info-package-header">
            <h3 class="info-package-title">${pkg.title}</h3>
            <p class="info-package-price">${priceTag(pkg.originalPrice, pkg.salePrice)}</p>
          </div>
          <div class="info-package-row">${itemsHtml}</div>
        </div>
      `;
    })
    .join("");

  slide.innerHTML = `
    <div class="info-product-backdrop" style="background-image:url('${WORK_IMAGE_BASE_PATH}bg_ptrabattoni-summer-361112.jpg')"></div>
    <div class="info-product-dim"></div>
    <div class="info-package-card">
      <div class="info-product-card-controls">
        <span class="info-product-control">‹</span>
        <span class="info-product-control">›</span>
        <span class="info-product-control">×</span>
      </div>
      <div class="info-packages">${packagesHtml}</div>
    </div>
  `;

  return slide;
}

function createProductSlide({ name, image, backdrop, description, memo, exhibition, price, examples }) {
  const slide = document.createElement("div");
  slide.className = "info-slide info-slide-product";

  const thumbs = [image, ...(examples || [])];
  const thumbsHtml =
    thumbs
      .map(
        (file, i) =>
          `<img class="info-product-thumb ${i === 0 ? "active" : ""}" src="${WORK_IMAGE_BASE_PATH}${file}" alt="" loading="lazy" />`
      )
      .join("") +
    `<img class="info-product-thumb" src="./assets/profile/pic_mungu.jpg" alt="" loading="lazy" />`;

  const backdropSrc = backdrop ? `${INFO_ASSET_PATH}${backdrop}` : `${WORK_IMAGE_BASE_PATH}${image}`;

  slide.innerHTML = `
    <div class="info-product-backdrop" style="background-image:url('${backdropSrc}')"></div>
    <div class="info-product-dim"></div>
    <div class="info-product-card">
      <div class="info-product-card-controls">
        <span class="info-product-control">‹</span>
        <span class="info-product-control">›</span>
        <span class="info-product-control">×</span>
      </div>
      <div class="info-product-image-pane">
        <img src="${WORK_IMAGE_BASE_PATH}${image}" alt="${name}" />
      </div>
      <div class="info-product-sidebar">
        <h3 class="info-product-name">${name}</h3>
        <p class="info-product-description">${description || "설명 없음"}</p>
        <div class="info-product-meta">
          <div class="info-product-meta-row">
            <span class="info-product-meta-label">가격</span>
            <span class="info-product-meta-value">${price.toLocaleString()}원</span>
          </div>
          <div class="info-product-meta-row">
            <span class="info-product-meta-label">소재 · 사이즈</span>
            <span class="info-product-meta-value">${memo}</span>
          </div>
          <div class="info-product-meta-row">
            <span class="info-product-meta-label">전시</span>
            <span class="info-product-meta-value">${exhibition}</span>
          </div>
        </div>
        <div class="info-product-thumbs">${thumbsHtml}</div>
      </div>
    </div>
  `;

  return slide;
}

function createBundleSlide({ title, images, largeImageCount = 0, contents, originalPrice, salePrice }) {
  const slide = document.createElement("div");
  slide.className = "info-slide info-slide-bundle";

  const cellsHtml = images
    .map((file, i) => {
      const sizeClass = i < largeImageCount ? "info-bundle-photo-lg" : "";
      return `<img class="info-bundle-photo ${sizeClass}" src="${WORK_IMAGE_BASE_PATH}${file}" alt="" loading="lazy" />`;
    })
    .join("");

  const lastIndex = contents ? contents.length - 1 : -1;
  const contentsHtml = contents
    ? `<ul class="info-bundle-contents">${contents
        .map((line, i) =>
          i === lastIndex
            ? `<li class="info-bundle-contents-last"><span>${line}</span><span class="info-bundle-price">${priceTag(originalPrice, salePrice)}</span></li>`
            : `<li>${line}</li>`
        )
        .join("")}</ul>`
    : "";

  slide.innerHTML = `
    <div class="info-product-backdrop" style="background-image:url('${WORK_IMAGE_BASE_PATH}bg_sabinevanerp-doors-3117027.jpg')"></div>
    <div class="info-product-dim"></div>
    <div class="info-bundle-card">
      <div class="info-product-card-controls">
        <span class="info-product-control">‹</span>
        <span class="info-product-control">›</span>
        <span class="info-product-control">×</span>
      </div>
      <h2 class="info-bundle-title">${title}</h2>
      <div class="info-bundle-grid">${cellsHtml}</div>
      ${contentsHtml}
    </div>
  `;

  return slide;
}

function attachDownloadButton(slide, index) {
  const downloadBtn = document.createElement("button");
  downloadBtn.className = "info-download-btn";
  downloadBtn.textContent = "다운로드";
  downloadBtn.addEventListener("click", () => downloadSlide(slide, index));
  slide.appendChild(downloadBtn);
}

function downloadSlide(slide, index) {
  html2canvas(slide, {
    useCORS: true,
    scale: 3,
    ignoreElements: (el) => el.classList.contains("info-download-btn"),
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = `info-slide-${index + 1}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

loadInfoSlides();
