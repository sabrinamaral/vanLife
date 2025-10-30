import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { VansContext } from "../../main";
import HostVanCard from "../../components/HostVanCard";
import Loading from "../../components/Loading";

export default function HostVans() {
  const currentLocation = useLocation().pathname;
  const { vans, loading } = useContext(VansContext);

  const hostVans = vans.filter((van) => van.id % 2 === 0);
  const vanElement = hostVans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id}>
      <HostVanCard van={van} />
    </Link>
  ));

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="host-vans-page">
      {currentLocation === "/host/vans" && <h1>Your Listed Vans</h1>}
      {vanElement}
    </section>
  );
}
