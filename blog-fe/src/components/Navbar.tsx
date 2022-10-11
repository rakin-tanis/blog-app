import { Link, useLocation } from "react-router-dom";
import { Menu } from "../types/menu";

const Navbar = () => {
  const { pathname } = useLocation();
  const menu: Menu[] = [];
  
  if (pathname !== '/') {
    menu.push({
      title: 'Home',
      path: '/'
    })
  }
  menu.push({
      title: "About",
      path: "/about",
    });
  menu.push({
    title: "Categories",
    path: "#",
  })
  return (
    <div className="navbar">
      <ul>
        {menu?.map((item) => (
          item && <li key={item.title}>
            <Link className="navbarLink" to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
