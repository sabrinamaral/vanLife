import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";
import { colorTypes } from "../../constants/btnType";
import { VansContext } from "../../main";

export default function Van() {
  const { vans } = useContext(VansContext);

  const vanElement = vans?.map((van) => {
    let vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1);
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
          <Button
            color={colorTypes[van.type]?.color}
            backgroundColor={colorTypes[van.type]?.backgroundColor}
          >
            {vanType}
          </Button>
        </div>
      </Link>
    );
  });

  return (
    <div className="vans-page">
      <h1>Explore our van options</h1>
      <div className="vans-filter">
        <Button color="#4D4D4D" backgroundColor="#FFEAD0">
          Simple
        </Button>
        <Button color="#4D4D4D" backgroundColor="#FFEAD0">
          Luxury
        </Button>
        <Button color="#4D4D4D" backgroundColor="#FFEAD0">
          Rugged
        </Button>
        <ButtonLink>Clear filters</ButtonLink>
      </div>
      <div className="vans-list">{vanElement}</div>
    </div>
  );
}
