import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Logo, User, Nav, NavLayout, NavProfile } from "./styles";

const navItems: Array<NavItem> = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "Templates",
    route: "/templates",
  },
  {
    name: "Community",
    route: "/community",
  },
  {
    name: "Support",
    route: "/support",
  }
];

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLayout>
          <Link to={"/dashboard"}>
            <Logo />
          </Link>
          <NavProfile>
            <User />
            David Hughes
          </NavProfile>
          <Menu mode="horizontal" selectedKeys={[location.pathname]}>
            {navItems.map((item: NavItem) => {
              return (
                <Menu.Item key={item.route}>
                  <Link to={item.route}>{item.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </NavLayout>
      </Nav>
    </>
  );
};

export default Navbar;
