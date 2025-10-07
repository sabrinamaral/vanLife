import { Link } from "react-router-dom";

export default function ButtonLink({ children, url }) {
  return (
    <Link to={url} className="btn-link">
      {children}
    </Link>
  );
}
