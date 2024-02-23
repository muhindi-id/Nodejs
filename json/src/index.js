// expressApp.js
import express from "express";
import bodyParser from "body-parser";
import { addJsonData, getProducts } from "./json.js";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
addJsonData("msg");
//GET
app.get("/api/products", async (req, res) => {
  res.status(200).json(await getProducts());
});

//POST
app.post("/api/products",async(req,res) => {
    const Product = req.body
    newProduct(product)
    res.status(200).json( Product )
    res.end()
})

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
