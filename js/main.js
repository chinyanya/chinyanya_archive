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
    const works = parseCSV(csvText);

    renderWorks(works);
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

function renderWorks(works) {
  workGrid.innerHTML = "";

  works.forEach((work) => {
    const isSale = String(work.is_sale).toLowerCase() === "true";

    const item = document.createElement("figure");
    item.className = "work-item";
    if (isSale) item.classList.add("sale");

    item.dataset.name = work.name;
    item.dataset.memo = work.memo;
    item.dataset.exhibition = work.exhibition;
    item.dataset.isSale = isSale;

    item.innerHTML = `
      <img
        src="${WORK_IMAGE_BASE_PATH}${work.file_name}"
        alt="${work.name || "archive image"}"
        loading="lazy"
      />
    `;

    if (isSale) {
      item.addEventListener("click", () => openSaleDetail(work));
    }

    workGrid.appendChild(item);
  });
}

function openSaleDetail(work) {
  // TODO: 다음 턴에서 판매 정보 팝업 구현 예정
  console.log("판매물 클릭:", work);
}

loadWorks();
