import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <div className="navbar">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
}
