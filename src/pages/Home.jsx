import ButtonCta from "../components/ButtonCta";

export default function Home() {
  return (
    <main className="home-hero">
      <div className="layer"></div>
      <div className="content">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road trip.</p>
        <ButtonCta url={"/vans"}>Find your van</ButtonCta>
      </div>
    </main>
  );
}
