import { Container } from "../../common/Container";
import { TileLayer } from "react-leaflet";
import { MyMap } from "./styled";
import "leaflet/dist/leaflet.css";

export const MapPage = () => {
  const coord = [51.12339388765598, 17.004908669261074];

  return (
    <Container>
      <MyMap center={coord} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MyMap>
    </Container>
  )
};