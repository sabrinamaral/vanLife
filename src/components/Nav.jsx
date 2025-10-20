import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <div className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
}
