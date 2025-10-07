import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import { colorTypes } from "../assets/btnType";

export default function Van() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setData(data.vans));
  }, []);

  const vanElement = data?.map((van) => {
    let vanType = van.type.charAt(0).toUpperCase() + van.type.slice(1);
    return (
      <Link to={`/vans/${van.id}`}>
        <div key={van.id} className="van-card">
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
