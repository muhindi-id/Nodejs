import { promises as fsPromise } from "fs";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

const file = path.join("data", "products.json");

const addJsonData = async () => {
  const data = "./data";

  await fsPromise.stat(data).catch(async (err) => {
    if (err && err.message.includes("no such file")) {
      await fsPromise.promises.mkdir(data);
    }
  });

  await createFile();
};

const createFile = async () => {
  try {
    const id = uuid();
    const items = [
      {
        id: `${id}`,
        productName: "Laptop",
        productPrice: 999.99,
        productDescription:
          "High-performance laptop with the latest specifications.",
      },
    ];

    const logData = JSON.stringify(items);
    if (!fs.existsSync(file)) {
      await fsPromise.writeFile(file, logData);
    }
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async () => {
  const fileContent = await fsPromise.readFile(file, { encoding: "utf8" });
  const products = JSON.parse(fileContent);
  return products;
};

export { addJsonData, getProducts };
