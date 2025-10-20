import { useOutletContext } from "react-router-dom";

export default function HostVansPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h4 className="host-van-detail-price">
      ${currentVan.price}
      <span>/day</span>
    </h4>
  );
}
