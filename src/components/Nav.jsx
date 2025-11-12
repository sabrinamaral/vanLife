import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("login");
  }

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
        {localStorage.length !== 0 && (
          <button onClick={fakeLogOut} className="logout">
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}
