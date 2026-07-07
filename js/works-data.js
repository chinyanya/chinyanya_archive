const PRODUCTS_CSV_PATH = "./data/products.csv";
const IMAGES_CSV_PATH = "./data/images.csv";
const WORK_IMAGE_BASE_PATH = "./assets/works/";

async function fetchProducts() {
  const [productRows, imageRows] = await Promise.all([
    fetchCSV(PRODUCTS_CSV_PATH),
    fetchCSV(IMAGES_CSV_PATH),
  ]);

  return joinProductsWithImages(productRows, imageRows);
}

async function fetchCSV(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`CSV load failed: ${response.status} (${path})`);
  }

  const csvText = await response.text();
  return parseCSV(csvText);
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

function joinProductsWithImages(productRows, imageRows) {
  return productRows.map((product) => ({
    no: product.no,
    name: product.name,
    description: product.description,
    memo: product.memo,
    price: product.price,
    exhibition: product.exhibition,
    category: product.category,
    product: product.product,
    images: imageRows
      .filter((image) => image.no === product.no)
      .map((image) => ({ file_name: image.file_name, type: image.type })),
  }));
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
