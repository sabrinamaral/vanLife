import HostVanCard from "../../components/HostVanCard";
import { useContext } from "react";
import { VansContext } from "../../main";

export default function Dashboard() {
  const { vans } = useContext(VansContext);
  const hostVans = vans.filter((van) => van.id % 2 === 0);
  const vanElement = hostVans.map((van) => (
    <HostVanCard van={van} key={van.id} />
  ));

  return (
    <div className="dashboard-main">
      <section className="dashboard-welcome">
        <h1>Welcome!</h1>
        <div className="dashboard-income-session">
          <p className="income-text">
            Income last <span>30 days</span>
          </p>
          <a>Details</a>
        </div>
        <p className="income-number">$2,260</p>
      </section>
      <section className="dashboard-review-score">
        <p>
          Review score <img src="/images/reviewStar.svg"></img>
          <span className="score">5.0</span>
          <span>/5</span>
        </p>
        <a>Details</a>
      </section>
      <section className="host-vans-list">
        <div className="host-listed-vans">
          <h2>Your listed vans</h2>
          <a>View all</a>
        </div>
        {vanElement}
      </section>
    </div>
  );
}
