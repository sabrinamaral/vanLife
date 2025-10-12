import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";
import ButtonCta from "../../components/ButtonCta";
import { colorTypes } from "../../constants/btnType";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    van && (
      <div className="van-detail">
        <ButtonLink url={"/vans"}>{"<- Back to all vans "}</ButtonLink>
        <img src={van.imageUrl} />
        <Button
          color={colorTypes[van.type]?.color}
          backgroundColor={colorTypes[van.type]?.backgroundColor}
        >
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </Button>
        <h1>{van.name}</h1>
        <p className="price">
          ${van.price}
          <span>/day</span>
        </p>
        <p>{van.description}</p>
        <ButtonCta>Rent this van</ButtonCta>
      </div>
    )
  );
}
