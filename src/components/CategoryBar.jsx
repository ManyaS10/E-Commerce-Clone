import { NavLink } from "react-router-dom";

const CATEGORIES = [
  { id: "all", label: "All", path: "/" },
  { id: 1, label: "Clothes", path: "/category/1" },
  { id: 2, label: "Electronics", path: "/category/2" },
  { id: 3, label: "Furniture", path: "/category/3" },
];

function CategoryBar() {
  return (
    <div className="flex gap-6 items-center text-sm sm:text-base font-medium">
      {CATEGORIES.map((c) => (
        <NavLink
          key={c.id}
          to={c.path}
          className={({ isActive }) =>
            `pb-1 hover:text-blue-600 transition ${
              isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-700"
            }`
          }
          end
        >
          {c.label}
        </NavLink>
      ))}
    </div>
  );
}

export default CategoryBar;
