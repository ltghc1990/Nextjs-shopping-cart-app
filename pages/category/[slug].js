import React from "react";
import ProductsList from "../../components/products/ProductsList";
const CategoryPage = ({ products }) => {
  console.log(products);
  return (
    <div>
      <p>Categoy Page!!!</p>
      <ProductsList products={products.products} />
    </div>
  );
};

export default CategoryPage;

// filter the products by category

export async function getServerSideProps(context) {
  const { query } = context;
  const queryString = JSON.stringify(query);

  const req = await fetch(
    `http://localhost:3000/api/products/${queryString.slug}`,
    {
      method: "POST",
      body: queryString,
    }
  );

  const products = await req.json();

  return {
    props: { products },
  };
}
