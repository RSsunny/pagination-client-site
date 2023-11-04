import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 flex justify-between items-center py-3">
      <div>
        <h1 className="text-3xl font-bold ">
          Pagi<span className="text-red-500">nation</span>
        </h1>
      </div>
      <div className="flex gap-5 font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/prodect"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          User
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-red-500 pb-1 text-red-500"
              : ""
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="flex gap-5 font-bold items-center ">
        <Link to={"/favorite"}>
          {" "}
          <AiOutlineHeart className="text-3xl text-red-500"></AiOutlineHeart>
        </Link>
        <NavLink
          to="/login"
          className="border border-black px-4 py-1 rounded-full"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
