import { useNavigate } from "react-router-dom";

export default function ButtonLink({ to, relative, children }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to, { relative })} className="btn-link">
      {children}
    </button>
  );
}
