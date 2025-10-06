import { Link } from "react-router-dom";

export default function ButtonCta({ children }) {
  return (
    <Link to="/vans" className="btn-cta">
      {children}
    </Link>
  );
}
