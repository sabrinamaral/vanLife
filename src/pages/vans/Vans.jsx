import { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink";
import ButtonType from "../../components/ButtonType";
import { VansContext } from "../../main";

export default function Van() {
  const { vans } = useContext(VansContext);

  const vanElement = vans?.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className="van-card">
          <img src={van.imageUrl} />
          <div className="van-info">
            <p>{van.name}</p>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <ButtonType type={van.type} />
        </div>
      </Link>
    );
  });

  return (
    <div className="vans-page">
      <h1>Explore our van options</h1>
      <div className="vans-filter">
        <ButtonType type="simple">Simple</ButtonType>
        <ButtonType type="luxury">Luxury</ButtonType>
        <ButtonType type="rugged">Rugged</ButtonType>
        <ButtonLink>Clear filters</ButtonLink>
      </div>
      <div className="vans-list">{vanElement}</div>
    </div>
  );
}
