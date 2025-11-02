export default function Error({ errorMessage }) {
  return (
    <main className="error-container" aria-live="assertive" key={errorMessage}>
      <h1>{errorMessage}</h1>
    </main>
  );
}
