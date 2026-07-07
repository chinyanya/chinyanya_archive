const detailOverlay = document.createElement("div");
detailOverlay.className = "detail-overlay";
detailOverlay.innerHTML = `
  <div class="detail-modal">
    <div class="detail-controls">
      <button class="detail-control-btn" data-action="prev" aria-label="이전 상품">‹</button>
      <button class="detail-control-btn" data-action="next" aria-label="다음 상품">›</button>
      <button class="detail-control-btn" data-action="close" aria-label="닫기">×</button>
    </div>
    <div class="detail-image-pane">
      <img id="detailImage" alt="" />
    </div>
    <div class="detail-sidebar">
      <h2 class="detail-title" id="detailTitle"></h2>
      <p class="detail-description" id="detailDescription"></p>
      <dl class="detail-meta" id="detailMeta"></dl>
      <div class="detail-thumbnails" id="detailThumbnails"></div>
    </div>
  </div>
`;
document.body.appendChild(detailOverlay);

const detailImage = detailOverlay.querySelector("#detailImage");
const detailTitle = detailOverlay.querySelector("#detailTitle");
const detailDescription = detailOverlay.querySelector("#detailDescription");
const detailMeta = detailOverlay.querySelector("#detailMeta");
const detailThumbnails = detailOverlay.querySelector("#detailThumbnails");

let detailProductList = [];
let detailProductIndex = 0;

// 칼선 모조지 세트(no 9~12)는 개별 상품이지만 상세 팝업에서는
// 세트 전체 사진(대표 이미지 + mojoji_1~4 + eg_mojoji)을 동일하게 보여준다.
const MOJOJI_SET_NOS = ["9", "10", "11", "12"];
const MOJOJI_SET_TITLE = "모조지 세트";
const MOJOJI_SET_DESCRIPTION = "칼선 모조지 4종 x 3장 세트";
const MOJOJI_SET_MAIN_IMAGE = { file_name: "mojoji_set.jpg" };
const MOJOJI_SET_EXAMPLE_IMAGES = [
  { file_name: "mojoji_1.jpg" },
  { file_name: "mojoji_2.jpg" },
  { file_name: "mojoji_3.jpg" },
  { file_name: "mojoji_4.jpg" },
  { file_name: "eg_mojoji.jpg" },
];

function openDetailPopup(product, productList = [product]) {
  detailProductList = productList;
  detailProductIndex = productList.findIndex((item) => item.no === product.no);
  if (detailProductIndex === -1) detailProductIndex = 0;

  renderDetailProduct();
  detailOverlay.classList.add("open");
}

function renderDetailProduct() {
  const product = detailProductList[detailProductIndex];

  const isMojojiSet = MOJOJI_SET_NOS.includes(product.no);

  const mainImage = isMojojiSet
    ? MOJOJI_SET_MAIN_IMAGE
    : product.images.find((image) => image.type === "main") || product.images[0];
  const exampleImages = isMojojiSet
    ? MOJOJI_SET_EXAMPLE_IMAGES
    : product.images.filter((image) => image.type === "example" && image.file_name.startsWith("eg_"));

  detailTitle.textContent = isMojojiSet ? MOJOJI_SET_TITLE : product.name;
  detailDescription.textContent = isMojojiSet
    ? MOJOJI_SET_DESCRIPTION
    : product.description || "설명 없음";

  const priceNumber = Number(product.price);
  const priceText = product.price && !Number.isNaN(priceNumber) ? `${priceNumber.toLocaleString()}₩` : "-";

  detailMeta.innerHTML = `
    <div class="detail-meta-row">
      <span class="detail-meta-label">가격</span>
      <span class="detail-meta-value">${priceText}</span>
    </div>
    <div class="detail-meta-row">
      <span class="detail-meta-label">소재 · 사이즈</span>
      <span class="detail-meta-value">${product.memo || "-"}</span>
    </div>
    <div class="detail-meta-row">
      <span class="detail-meta-label">전시</span>
      <span class="detail-meta-value">${product.exhibition || "-"}</span>
    </div>
  `;

  const thumbnailImages = [mainImage, ...exampleImages];

  detailThumbnails.innerHTML = "";
  thumbnailImages.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.className = "detail-thumbnail";
    if (index === 0) thumb.classList.add("active");
    thumb.src = `${WORK_IMAGE_BASE_PATH}${image.file_name}`;
    thumb.alt = index === 0 ? "기본 사진" : "샘플 사진";
    thumb.addEventListener("click", () => setDetailImage(image, thumb));
    detailThumbnails.appendChild(thumb);
  });

  setDetailImage(mainImage);
}

function setDetailImage(image, thumbEl) {
  detailImage.src = image?.file_name ? `${WORK_IMAGE_BASE_PATH}${image.file_name}` : "";

  detailThumbnails.querySelectorAll(".detail-thumbnail").forEach((el) => el.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function closeDetailPopup() {
  detailOverlay.classList.remove("open");
  detailImage.src = "";
}

function showPrevProduct() {
  detailProductIndex = (detailProductIndex - 1 + detailProductList.length) % detailProductList.length;
  renderDetailProduct();
}

function showNextProduct() {
  detailProductIndex = (detailProductIndex + 1) % detailProductList.length;
  renderDetailProduct();
}

detailOverlay.addEventListener("click", (event) => {
  if (event.target === detailOverlay) {
    closeDetailPopup();
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;

  if (action === "close") closeDetailPopup();
  if (action === "prev") showPrevProduct();
  if (action === "next") showNextProduct();
});

document.addEventListener("keydown", (event) => {
  if (!detailOverlay.classList.contains("open")) return;

  if (event.key === "Escape") closeDetailPopup();
  if (event.key === "ArrowLeft") showPrevProduct();
  if (event.key === "ArrowRight") showNextProduct();
});
