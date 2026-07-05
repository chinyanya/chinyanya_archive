const CSV_PATH = "./data/works.csv";
const WORK_IMAGE_BASE_PATH = "./assets/works/";

const workGrid = document.querySelector("#workGrid");

async function loadWorks() {
  try {
    const response = await fetch(CSV_PATH);

    if (!response.ok) {
      throw new Error(`CSV load failed: ${response.status}`);
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);
    const products = groupIntoProducts(rows);

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

function parseCSV(csvText) {
  const lines = csvText
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);

  const headers = lines[0].split(",").map((header) => header.trim());

  return lines.slice(1).map((line) => {
    const values = splitCSVLine(line);

    return headers.reduce((acc, header, index) => {
      acc[header] = values[index]?.trim() ?? "";
      return acc;
    }, {});
  });
}

function splitCSVLine(line) {
  const result = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

function groupIntoProducts(rows) {
  const productsByNo = new Map();

  rows.forEach((row) => {
    if (!productsByNo.has(row.no)) {
      productsByNo.set(row.no, {
        no: row.no,
        name: row.name,
        memo: row.memo,
        price: row.price,
        exhibition: row.exhibition,
        is_sale: row.is_sale,
        images: [],
      });
    }

    productsByNo.get(row.no).images.push({
      file_name: row.file_name,
      is_picture: String(row.is_picture).toLowerCase() === "true",
    });
  });

  return Array.from(productsByNo.values());
}

function renderWorks(products) {
  workGrid.innerHTML = "";

  products.forEach((product) => {
    const isSale = String(product.is_sale).toLowerCase() === "true";
    const mainImage = product.images[0];

    const item = document.createElement("figure");
    item.className = "work-item";
    if (isSale) item.classList.add("sale");

    item.dataset.no = product.no;
    item.dataset.name = product.name;
    item.dataset.memo = product.memo;
    item.dataset.price = product.price;
    item.dataset.exhibition = product.exhibition;
    item.dataset.isSale = isSale;

    item.innerHTML = `
      <img
        src="${WORK_IMAGE_BASE_PATH}${mainImage.file_name}"
        alt="${product.name || "archive image"}"
        loading="lazy"
      />
    `;

    if (isSale) {
      item.addEventListener("click", () => openSaleDetail(product));
    }

    workGrid.appendChild(item);
  });
}

function openSaleDetail(work) {
  // TODO: 다음 턴에서 판매 정보 팝업 구현 예정
  console.log("판매물 클릭:", work);
}

loadWorks();
