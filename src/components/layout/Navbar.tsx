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
  { to: "/podroz/nowa", label: "Zaplanuj podróż" },
  { to: "/podroze", label: "Moje podróże" },
];

export function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar fluid rounded className="border-b border-gray-200 bg-white px-4 py-3">
      <NavbarBrand>
        <Link
          to="/"
          className="self-center whitespace-nowrap font-heading text-2xl text-primary-900"
        >
          Packfit
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
