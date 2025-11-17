import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VansContext } from "../../main";
import ButtonType from "../../components/ButtonType";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Van() {
  const { vans, loading, error } = useContext(VansContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get("type");

  let vanElements = queryParams
    ? vans.filter(
        (van) => van.type.toLowerCase() === queryParams?.toLowerCase()
      )
    : vans;

  const vanElement = vanElements?.map((van) => {
    return (
      <Link
        to={van.id}
        key={van.id}
        state={{ search: `?${searchParams.toString()}`, type: queryParams }}
      >
        <div className="van-card">
          <img src={van.imageUrl} alt={van.name} />
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <div className="vans-page">
      <h1>Explore our van options</h1>
      <div className="vans-filter">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`btn ${queryParams === "simple" ? "simple" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`btn ${queryParams === "luxury" ? "luxury" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`btn ${queryParams === "rugged" ? "rugged" : ""}`}
        >
          Rugged
        </button>
        {queryParams && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="btn-link "
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="vans-list">{vanElement}</div>
    </div>
  );
}
