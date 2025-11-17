import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import ButtonType from "../../components/ButtonType";
import ButtonLink from "../../components/ButtonLink";
import ButtonCta from "../../components/ButtonCta";
import { VansContext } from "../../main";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function VanDetail() {
  const { vans, loading, error } = useContext(VansContext);
  const params = useParams();
  const location = useLocation();

  const van = vans.find((van) => van.id === params.id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    van && (
      <div className="van-detail">
        {/* passing the searchParams through the state props from the Link that's wrapping the van individually */}
        <ButtonLink to={`..${location?.state.search}`} relative={"path"}>
          {`<- Back to ${location?.state.type || "all"} vans `}
        </ButtonLink>

        <img src={van.imageUrl} alt={van.name} />
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
