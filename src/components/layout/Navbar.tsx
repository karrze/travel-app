import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/offers", label: "Oferty" },
  { to: "/about", label: "O nas" },
];

export function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar fluid rounded className="border-b border-gray-200 bg-white px-4 py-3">
      <NavbarBrand>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-xl font-semibold text-blue-600"
        >
          Travel App
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navLinks.map((link) => (
          <NavbarLink key={link.to} active={location.pathname === link.to}>
            <Link to={link.to}>{link.label}</Link>
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
