import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Cart() {
  const { cartItems, removeFromCart, checkout } = useCart(); 
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
    } else {
      checkout();
      navigate("/orders"); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            className="w-40 mx-auto mb-6 opacity-70"
          />
          <p className="text-gray-600 text-lg mb-4">Oops! Your cart is empty</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-lg font-semibold text-right">
            Total: ${total.toFixed(2)}
          </div>
          <div className="text-right">
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
