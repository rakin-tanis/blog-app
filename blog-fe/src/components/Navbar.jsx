import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Categories",
      path: "#",
    },
  ];
  return (
    <div className="navbar">
      <ul>
        {menu?.map((item) => (
          <li key={item.title}>
            <Link className="navbarLink" to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
