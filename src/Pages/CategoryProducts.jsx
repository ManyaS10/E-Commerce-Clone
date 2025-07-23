import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../api/Product";
import ProductCard from "../components/ProductCard";

function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id === "all") {
      getProducts().then((res) => setProducts(res.data));
       

    } else {
      getProductsByCategory(id).then((res) => setProducts(res.data));
    }
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Category: {id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
