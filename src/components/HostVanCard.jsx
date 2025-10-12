export default function HostVanCard({ van }) {
  return (
    <div className="host-van-card">
      <img src={van.imageUrl} alt={van.name} />
      <div className="host-van-card-content">
        <div className="host-van-card-content-text">
          <h4>{van.name}</h4>
          <p>${van.price}/day</p>
        </div>
        <a>Edit</a>
      </div>
    </div>
  );
}
