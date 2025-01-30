// sheets.ts
import { GaxiosResponse } from "gaxios";
import { google } from "googleapis";

interface Product {
  name: string;
  image: string;
  price: string;
  brand: string;
  category: string;
}

interface Category {
  name: string;
  products: Product[];
}

const getAuthClient = () => {
  const client = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"), // Ensure to replace '\\n' with actual line breaks
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return client;
};

export async function reshapeProducts(
  products: Product[]
): Promise<Category[]> {
  try {
    const categories: Category[] = products.reduce(
      (acc: Category[], product: Product) => {
        const categoryIndex = acc.findIndex((c) => c.name === product.category);
        if (categoryIndex >= 0) {
          acc[categoryIndex].products.push(product);
        } else {
          acc.push({ name: product.category, products: [product] });
        }
        return acc;
      },
      []
    );
    return categories;
  } catch (error) {
    throw new Error(`The API returned an error: ${error}`);
  }
}

export async function fetchSpreadsheetData(
  sheetId: string,
  ranges: string[]
): Promise<{ [range: string]: {}[] }> {
  const auth = getAuthClient();
  const sheets = google.sheets({ version: "v4", auth });
  try {
    // Fetch data from multiple ranges in the spreadsheet
    const response: GaxiosResponse = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: sheetId,
      ranges: ranges,
    });
    const data = response.data.valueRanges;
    if (!data || data.length === 0) {
      throw new Error("No data found.");
    }
    // Map over each valueRange and reshape it
    const rangeObjects: { [range: string]: {}[] } = {};
    data.forEach((valueRange) => {
      if (valueRange.values) {
        const [headers, ...rows] = valueRange.values;
        rangeObjects[valueRange.range] = rows.map((row) => {
          const object: any = {};
          headers.forEach((header, index) => {
            object[header.toLowerCase()] = row[index] || ""; // Or use some default value for empty cells
          });
          return object;
        });
      }
    });
    return rangeObjects;
  } catch (error) {
    throw new Error(`The API returned an error: ${error}`);
  }
}
