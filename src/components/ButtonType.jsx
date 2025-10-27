import { colorTypes } from "../constants/btnType";
import { useNavigate } from "react-router-dom";

export default function ButtonType({ type, to }) {
  const navigate = useNavigate();

  let vanType = type.charAt(0).toUpperCase() + type.slice(1);
  const styles = {
    color: colorTypes[type]?.color,
    backgroundColor: colorTypes[type]?.backgroundColor,
  };

  return (
    <button onClick={() => navigate(to)} className="btn" style={styles}>
      {vanType}
    </button>
  );
}
