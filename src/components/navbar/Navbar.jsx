import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/addCoffee", label: "Add Coffee" },
    { path: "/users", label: "Users" },
    { path: "/signIn", label: "Sign In" },
    { path: "/signUp", label: "Sign Up" },
  ];

  return (
    <div className="navbar bg-base-200 shadow-md px-6">
      {/* Logo / Brand */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          ☕ CoffeeHub
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg transition ${
                isActive ? "bg-primary text-white" : "hover:bg-base-300"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
