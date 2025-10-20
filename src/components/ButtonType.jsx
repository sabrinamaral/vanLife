import { colorTypes } from "../constants/btnType";

export default function ButtonType({ type }) {
  let vanType = type.charAt(0).toUpperCase() + type.slice(1);
  const styles = {
    color: colorTypes[type]?.color,
    backgroundColor: colorTypes[type]?.backgroundColor,
  };

  return (
    <button className="btn" style={styles}>
      {vanType}
    </button>
  );
}
