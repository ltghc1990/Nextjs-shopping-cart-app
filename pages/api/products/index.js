import data from "./data.json";

const getAllProducts = () => {
  const products = data;
  return products;
};

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(200).json({ message: "Was not a get request" });
  } else {
    const products = getAllProducts();
    res.status(200).json(products);
  }
}
