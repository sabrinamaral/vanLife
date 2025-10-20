import React from "react";
import { Link, useParams } from "react-router-dom";
import ButtonType from "../../components/ButtonType";
import ButtonLink from "../../components/ButtonLink";
import ButtonCta from "../../components/ButtonCta";

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
        <ButtonLink to={"/vans"}>{"<- Back to all vans "}</ButtonLink>

        <img src={van.imageUrl} />
        <ButtonType type={van.type}>{van.type}</ButtonType>
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
