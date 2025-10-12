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
      <session className="dashboard-review-score">
        <p>
          Review score <img src="/images/reviewStar.svg"></img>
          <span className="score">5.0</span>
          <span>/5</span>
        </p>
        <a>Details</a>
      </session>
    </div>
  );
}
