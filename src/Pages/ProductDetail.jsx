import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/Product";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 md:flex gap-6">
      <img src={product.images[0]} className="w-full md:w-1/3" />
      <div>
        <h1 className="text-xl font-bold">{product.title}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-green-600 font-bold text-lg">${product.price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
