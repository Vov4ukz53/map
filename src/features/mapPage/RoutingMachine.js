import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAddressEnd, selectAddressStart } from "../mapSlice";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export const RoutingMachine = () => {
  const { position } = useSelector(selectAddressStart);
  const addressEnd = useSelector(selectAddressEnd);
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    position && addressEnd && L.Routing.control({
      waypoints: [
        L.latLng(position.lat, position.lon),
        L.latLng(addressEnd[0].position.lat, addressEnd[0].position.lon),
      ],
      show: false,
    }).addTo(map);
  }, [map, position, addressEnd]);

  return null;
};
