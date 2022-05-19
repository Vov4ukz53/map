import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Container } from "../../common/Container";
import { TileLayer } from "react-leaflet";
import { RoutingMachine } from "./RoutingMachine";
import { coordStart } from "./coordStart";
import { MyMap, Button } from "./styled";
import { RouteInfo } from "./RouteInfo";
import "leaflet/dist/leaflet.css";

export const MapPage = () => {
  const pdfExportComponent = useRef(null);

  const handleExport = () => {
    pdfExportComponent.current.save();
  };

  return (
    <Container>
      <PDFExport ref={pdfExportComponent} papaeSize="A4">
        <MyMap center={coordStart} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RoutingMachine />
        </MyMap>
        <RouteInfo />
      </PDFExport>
      <Button onClick={handleExport}>Save to pdf</Button>
    </Container>
  )
};