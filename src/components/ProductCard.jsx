import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(data);          
    navigate("/cart");        
  };

  return (
    <div className=" shadow-md p-4 rounded-lg">
      <img
        src={data.images[0]}
        alt={data.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="font-bold text-lg mt-2">{data.title}</h3>
      <p className="text-gray-600">${data.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
