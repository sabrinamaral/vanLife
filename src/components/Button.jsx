export default function Button({ children, color, backgroundColor }) {
  const styles = { color: color, backgroundColor: backgroundColor };
  return (
    <button className="btn" style={styles}>
      {children}
    </button>
  );
}
