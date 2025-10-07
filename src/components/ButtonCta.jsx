import { Link } from "react-router-dom";

export default function ButtonCta({ children, url }) {
  return (
    <Link to={url} className="btn-cta">
      {children}
    </Link>
  );
}
