import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileLayer } from "react-leaflet";
import { MyMap } from "./styled";
import { selectMap, selectMap2 } from "../mapSlice";
import "leaflet/dist/leaflet.css";
import { RoutingMachine } from "./RoutingMachine";

export const MapPage = () => {
  // const { position } = useSelector(selectMap);
  // const map2 = useSelector(selectMap2);
  const coord = [51.12339388765598, 17.004908669261074];

  return (
    <Container>
      <MyMap center={coord} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine />
      </MyMap>
    </Container>
  )
};