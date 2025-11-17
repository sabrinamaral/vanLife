import HostVans from "./HostVans";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
          Review score{" "}
          <img src="/images/reviewStar.svg" alt="star using on reviews"></img>
          <span className="score">5.0</span>
          <span>/5</span>
        </p>
        <a>Details</a>
      </section>
      <section>
        <div className="host-listed-vans">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <HostVans />
      </section>
    </div>
  );
}
