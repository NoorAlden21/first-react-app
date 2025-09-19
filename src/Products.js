import { useState } from "react";
export default function Products() {
  const [products, setProducts] = useState([
    { id: 0, name: "Baklava", count: 1 },
    { id: 1, name: "Chesse", count: 5 },
    { id: 2, name: "Spaghetti", count: 2 },
  ]);
  const productsList = products.map((product) => {
    return (
      <li key={product.id}>
        {product.name} (<b>{product.count}</b>){" "}
        <button
          onClick={() => {
            handleIncreaseClick(product.id);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            handleDecreaseClick(product.id);
          }}
        >
          -
        </button>
      </li>
    );
  });
  function handleIncreaseClick(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  function handleDecreaseClick(id) {
    let newProducts = [];
    for (const product of products) {
      if (product.id === id) {
        if (product.count > 1) {
          newProducts.push({ ...product, count: product.count - 1 });
        }
      } else {
        newProducts.push(product);
      }
    }
    setProducts(newProducts);
  }

  return <ul>{productsList}</ul>;
}
