const CSV_PATH = "./data/works.csv";
const WORK_IMAGE_BASE_PATH = "./assets/works/";
const BACKGROUND_CATEGORY = "10";

async function fetchProducts() {
  const response = await fetch(CSV_PATH);

  if (!response.ok) {
    throw new Error(`CSV load failed: ${response.status}`);
  }

  const csvText = await response.text();
  const rows = parseCSV(csvText);

  return groupIntoProducts(rows);
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
  const productsByKey = new Map();

  rows.forEach((row) => {
    const key = row.no;

    if (!productsByKey.has(key)) {
      productsByKey.set(key, {
        no: row.no,
        name: row.name,
        memo: row.memo,
        price: row.price,
        exhibition: row.exhibition,
        category: row.category,
        product: row.product,
        images: [],
      });
    }

    productsByKey.get(key).images.push({
      file_name: row.file_name,
    });
  });

  return Array.from(productsByKey.values());
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
