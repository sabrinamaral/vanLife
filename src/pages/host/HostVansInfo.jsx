import { useOutletContext } from "react-router-dom";

export default function HostVansInfo() {
  const { currentVan } = useOutletContext();
  return (
    <div className="host-van-detail-body">
      <p>
        <strong>Name: </strong>
        {currentVan.name}
      </p>
      <p>
        <strong>Category: </strong>
        {currentVan.type}
      </p>
      <p>
        <strong>Description: </strong>
        {currentVan.description}
      </p>
      <p>
        <strong>Visibility: </strong> Public
      </p>
    </div>
  );
}
