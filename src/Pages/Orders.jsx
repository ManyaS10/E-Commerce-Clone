import { useCart } from "../context/CartContext";

function Orders() {
  const { orders } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">🧾 My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center mt-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png"
            alt="No orders"
            className="w-40 mx-auto mb-6 opacity-70"
          />
          <p className="text-gray-600 text-lg">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">${item.price}</p>
                <p className="text-sm text-green-600 font-medium">✅ Order Confirmed</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
