"use client";

import { useParams } from "next/navigation";
import { useProducts } from "../context/ProductsContext";

export default function CategoryPage() {
  const { products } = useProducts();
  const params = useParams();
  const categoryName = decodeURIComponent(params.category);

  const filteredProducts = products.filter((p) => p.category === categoryName);

  return (
    <div className="products-grid">
      <h2>{categoryName}</h2>
      {filteredProducts.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
