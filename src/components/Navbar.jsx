import { categoryToUrl } from "../helpers/categoryParser";
import { getCategories } from "../services/ItemsService";
import { CartWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const categories = getCategories();

  return (
    <div className="text-black w-full shadow-md">
      <nav className="max-w-7xl w-full flex flex-row justify-between items-center p-4 mx-auto">
        <Link to="/">
          <h2 className="text-amber-800 text-3xl font-semibold">CoffeBeans</h2>
        </Link>
        <div className="flex gap-8">
          <ul className="flex flex-row gap-4">
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink to={`/category/${categoryToUrl(category.name)}`}>
                  <span className="text-amber-800 font-semibold hover:text-amber-900">
                    {category.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};
