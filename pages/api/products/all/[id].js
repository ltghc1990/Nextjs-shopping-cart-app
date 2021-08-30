import data from "../data.json";
// data is an obj inside of
const filterById = (id) => {
  // I think its doing a strict comparison; the id is a string while the obj is a num
  const filteredProduct = data.filter((product) => {
    return product.id === id;
  });

  return filteredProduct;
};
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Was not a post req" });
  } else {
    // filter by id

    //  parse the body back to javascript so we can use it to filter
    // then once we have the data we transform it back to json
    const lol = JSON.parse(req.body);

    // convert the id to num so a strict comparision does not fail
    const numId = parseInt(lol.query.id);
    console.log(numId);
    const product = filterById(numId);
    // an array with 1 obj, but we just want the object...
    const singularProduct = product[0];
    console.log(singularProduct);

    res.status(200).json(singularProduct);
  }
}
