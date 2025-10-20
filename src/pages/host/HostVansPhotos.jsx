import { useOutletContext } from "react-router-dom";

export default function HostVansPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <div className="host-van-detail-photos">
      <img src={currentVan.imageUrl} alt={currentVan.name} />
    </div>
  );
}
