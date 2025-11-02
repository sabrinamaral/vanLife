export default function Loading() {
  return (
    <div className="spinner-container" aria-live="polite">
      <div className="spinner"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
