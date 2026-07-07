const galleryOverlay = document.createElement("div");
galleryOverlay.className = "detail-overlay";
galleryOverlay.innerHTML = `
  <div class="detail-modal detail-modal-gallery">
    <div class="detail-controls">
      <button class="detail-control-btn" data-action="prev" aria-label="이전 사진">‹</button>
      <button class="detail-control-btn" data-action="next" aria-label="다음 사진">›</button>
      <button class="detail-control-btn" data-action="close" aria-label="닫기">×</button>
    </div>
    <div class="detail-image-pane detail-image-pane-full">
      <img id="galleryImage" alt="" />
    </div>
  </div>
`;
document.body.appendChild(galleryOverlay);

const galleryImage = galleryOverlay.querySelector("#galleryImage");

let galleryImages = [];
let galleryIndex = 0;

function openGallery(images, startIndex) {
  galleryImages = images;
  galleryIndex = startIndex || 0;

  renderGalleryImage();
  galleryOverlay.classList.add("open");
}

function renderGalleryImage() {
  galleryImage.src = galleryImages[galleryIndex];
}

function closeGallery() {
  galleryOverlay.classList.remove("open");
  galleryImage.src = "";
}

function showPrevGalleryImage() {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  renderGalleryImage();
}

function showNextGalleryImage() {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  renderGalleryImage();
}

galleryOverlay.addEventListener("click", (event) => {
  if (event.target === galleryOverlay) {
    closeGallery();
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;

  if (action === "close") closeGallery();
  if (action === "prev") showPrevGalleryImage();
  if (action === "next") showNextGalleryImage();
});

document.addEventListener("keydown", (event) => {
  if (!galleryOverlay.classList.contains("open")) return;

  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") showPrevGalleryImage();
  if (event.key === "ArrowRight") showNextGalleryImage();
});

const munguCard = document.querySelector("#munguCard");

if (munguCard) {
  munguCard.addEventListener("click", () => {
    const images = Array.from(
      { length: 8 },
      (_, i) => `./assets/profile/mungu-preview-${i + 1}.png`
    );
    openGallery(images, 0);
  });
}
