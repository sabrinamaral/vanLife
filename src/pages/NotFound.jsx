import ButtonCta from "../components/ButtonCta";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>The page you were looking for was not found.</h1>
      <ButtonCta url="/">Return to home</ButtonCta>
    </main>
  );
}
