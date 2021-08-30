// filter by category
import data from "./data.json";

//

const filterByCategory = (category) => {
  const filteredData = data.filter((product) => product.category === category);
  return filteredData;
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Not a get request" });
  } else {
    const queryString = JSON.parse(req.body);
    // We can filter with the queryString
    const filteredProducts = filterByCategory(queryString.slug);

    res.status(200).json({ products: filteredProducts });
  }
}
