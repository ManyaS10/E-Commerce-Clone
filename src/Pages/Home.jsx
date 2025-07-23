import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProducts } from "../api/Product";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams(); // this gets slug like "electronics"
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase();

  useEffect(() => {
    getProducts().then((res) => {
      let filtered = res.data;

      if (categoryName) {
        filtered = filtered.filter(
          (product) =>
            product.category?.slug?.toLowerCase() === categoryName.toLowerCase()
        );
      }

      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
      }

      setProducts(filtered);
    });
  }, [categoryName, searchTerm]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.length > 0 ? (
        products.map((p) => <ProductCard key={p.id} data={p} />)
      ) : (
        <p className="text-center col-span-full text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default Home;
