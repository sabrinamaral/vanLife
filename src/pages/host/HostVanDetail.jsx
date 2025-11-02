import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { VansContext } from "../../main";
import ButtonType from "../../components/ButtonType";
import ButtonLink from "../../components/ButtonLink";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function HostVanDetail() {
  const params = useParams();
  const { vans, loading, error } = useContext(VansContext);
  const [currentVan, setCurrentVan] = useState();

  useEffect(() => {
    const elementVan = vans.find((van) => van.id === params.id);
    setCurrentVan(elementVan);
  }, [vans, params.id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error errorMessage={error} />;
  }

  if (!currentVan) {
    return null;
  }

  return (
    <main className="host-van-detail-page">
      <ButtonLink to={".."} relative={"path"}>
        &larr; <span>Back to all vans </span>
      </ButtonLink>
      <section className="host-van-detail-container">
        <div className="host-van-detail-header">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-header-text">
            <ButtonType type={currentVan.type} />
            <h2>{currentVan.name}</h2>
            <p>
              <span>${currentVan.price}</span>/day
            </p>
          </div>
        </div>
        <div className="host-van-detail-nav">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
        </div>

        <Outlet context={{ currentVan }} />
      </section>
    </main>
  );
}
