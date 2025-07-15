import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DarkMode from "../components/DarkMode"; 

const categories = ["All", "Clothes", "Electronics", "Furnitures"];

function Header() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    navigate(category === "All" ? "/" : `/category/${category.toLowerCase()}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ShopEasy
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-1 rounded w-full md:w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Right Side: Cart, User, Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="hover:text-blue-600 text-2xl transition">
            <AiOutlineShoppingCart />
          </Link>

          {/* Dark Mode Toggle 🌙 */}
          <DarkMode />

          {/* Login or Email */}
          {user ? (
            <span className="text-sm text-green-500">{user.email}</span>
          ) : (
            <Link to="/login" className="hover:text-blue-600 transition">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 flex gap-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`capitalize text-sm md:text-base px-3 py-1 rounded ${
              location.pathname.includes(cat.toLowerCase())
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Header;
